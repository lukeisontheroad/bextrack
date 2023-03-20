import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "xyz.lukeisontheroad.bexio",
  appName: "BexTrack",
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    },
    // LocalNotifications: {
    //   smallIcon: 'ic_stat_icon_config_sample',
    //   iconColor: '#CE0B7C',
    // },
    // PushNotifications: {
    //   presentationOptions: ['alert', 'sound'],
    // },
  },
  "cordova": {}
};

export default config;


