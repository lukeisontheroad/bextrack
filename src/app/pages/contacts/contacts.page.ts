import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ApiService } from 'src/app/services/api/api.service';
import { Contacts, Contact as NativeContact, ContactField, ContactName, ContactAddress } from '@ionic-native/contacts/ngx';
import { UtilsService } from 'src/app/services/utils/utils.service';

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

  private async init(){
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

  onSearch($event){
    let value = $event.detail.value.toLowerCase()
    if(value === ''){
      this.filteredContacts = this.contacts
    }else{
      this.filteredContacts = this.contacts.filter(contact => {
        return contact.name_1.toLowerCase().indexOf(value) != -1 || (contact.name_2 && contact.name_2.toLowerCase().indexOf(value) != -1)
      })
    }
  }

  export(contact: Contact){
    let nativeContact: NativeContact = this.nativeContacts.create();
    let formattedName = (contact.name_2) ? contact.name_2 + ' ' + contact.name_1 : contact.name_1
    nativeContact.name = new ContactName(formattedName);
    nativeContact.addresses = [new ContactAddress(true, 'work', null, contact.address, contact.city, null, contact.postcode + '')];
    nativeContact.note = contact.remarks
    nativeContact.birthday = contact.birthday

    // Emails
    let phoneNumbers = []
    if(contact.phone_mobile) phoneNumbers.push(new ContactField('mobile', contact.phone_mobile))
    if(contact.phone_fixed) phoneNumbers.push(new ContactField('work', contact.phone_fixed))
    if(contact.phone_fixed_second) phoneNumbers.push(new ContactField('home', contact.phone_fixed_second))
    if(phoneNumbers.length > 0) nativeContact.phoneNumbers = phoneNumbers

    nativeContact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    
    // Emails
    let emails = []
    if(contact.mail) emails.push(new ContactField('work', contact.mail))
    if(contact.mail_second) emails.push(new ContactField('private', contact.mail_second))
    if(emails.length > 0) nativeContact.emails = emails

    nativeContact.save().then(
      () => {
        this.utils.showToast('Created')
      },
      (error: any) => {
        this.utils.showToast('Export failed')
      }
    );
  }

}
