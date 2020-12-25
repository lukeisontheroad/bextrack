import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ApiService } from 'src/app/services/api/api.service';
import { Contacts, Contact as NativeContact, ContactField, ContactName, ContactAddress, ContactFindOptions } from '@ionic-native/contacts/ngx';
import { UtilsService } from 'src/app/services/utils/utils.service';
type ContactResult = {isUpdate: boolean, contact: NativeContact};

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  public skeletons = new Array(12);
  public loading = true;

  private contacts: Contact[] = []
  public filteredContacts: Contact[] = []

  constructor(
    private nativeContacts: Contacts,
    private apiService: ApiService,
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.init()
  }

  private async init() {
    this.doRefresh();
    this.apiService.projectsUpdated.subscribe(() => this.doRefresh())
  }

  public async doRefresh(event?: any) {
    this.loading = true
    this.contacts = await this.apiService.getContacts(true)
    this.filteredContacts = this.contacts

    if (event) {
      event.target.complete();
    }
    this.loading = false
  }

  onSearch($event) {
    let value = $event.detail.value.toLowerCase()
    if (value === '') {
      this.filteredContacts = this.contacts
    } else {
      this.filteredContacts = this.contacts.filter(contact => {
        return contact.name_1.toLowerCase().indexOf(value) != -1 || (contact.name_2 && contact.name_2.toLowerCase().indexOf(value) != -1)
      })
    }
  }


  async getContact(contact: Contact): Promise<ContactResult> {
    return new Promise(async resolve => {
      let nativeContact = this.nativeContacts.create();
      let isUpdate = false
      let fields = [['emails', 'mail'], ['phoneNumbers', 'phone_mobile'], ['phoneNumbers', 'phone_fixed'], ['displayName', 'calculated_name']]
      for(var i = 0; i < fields.length; i++){
        if(fields[fields[i][0]] === 'displayName'){
          // abort
          resolve({isUpdate: isUpdate, contact: nativeContact})
          return
        }else if(contact[fields[i][1]] !== null && contact[fields[i][1]].length > 0){
          i = fields.length + 1
        }
      }
      let options = new ContactFindOptions();
      let results: NativeContact[] = []
      contact.calculated_name = (contact?.name_2?.trim() + ' ' + contact?.name_1?.trim()).trim()
      for(var i = 0; i < fields.length; i++){
        if(contact[fields[i][1]] !== null && contact[fields[i][1]].length > 0){
          console.log('set filter to ' + contact[fields[i][1]])
          options.filter = contact[fields[i][1]];
          options.multiple = false;
          results = await this.nativeContacts.find([fields[i][0] as any], options);
          console.log('result', results)
          if (results.length === 1) {
            isUpdate = true
            nativeContact = results[0]
            i = fields.length + 1
          }
        }
      }
      resolve({isUpdate: isUpdate, contact: nativeContact})
    })
  }

  async export(contact: Contact) {
    let contactResult = await this.getContact(contact)
    let nativeContact = contactResult.contact
    // let nativeContact: NativeContact = this.nativeContacts.create();
    console.log('name', contact)
    // let formattedName = (contact.name_2) ? contact.name_2 + ' ' + contact.name_1 : contact.name_1
    nativeContact.name = new ContactName(null, contact?.name_1?.trim(), contact?.name_2?.trim());
    nativeContact.addresses = [new ContactAddress(true, 'work', null, contact.address, contact.city, null, contact.postcode + '')];
    nativeContact.note = contact.remarks
    nativeContact.birthday = contact.birthday

    // Emails
    let phoneNumbers = []
    if (contact.phone_mobile) phoneNumbers.push(new ContactField('mobile', contact.phone_mobile))
    if (contact.phone_fixed) phoneNumbers.push(new ContactField('work', contact.phone_fixed))
    if (contact.phone_fixed_second) phoneNumbers.push(new ContactField('home', contact.phone_fixed_second))
    if (phoneNumbers.length > 0) nativeContact.phoneNumbers = phoneNumbers

    // Emails
    let emails = []
    if (contact.mail) emails.push(new ContactField('work', contact.mail))
    if (contact.mail_second) emails.push(new ContactField('private', contact.mail_second))
    if (emails.length > 0) nativeContact.emails = emails

    nativeContact.save().then(
      () => {
        if (contactResult.isUpdate) {
          this.utils.showToast('Updated')
        } else {
          this.utils.showToast('Created')
        }
      },
      (error: any) => {
        this.utils.showToast('Export failed')
      }
    );
  }

}
