import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { OrderButtonComponent } from './components/order-button/order-button.component';
import { WhyWeComponent } from './components/why-we/why-we.component';
import { PriceComponent } from './components/price/price.component';
import { YourTaskComponent } from './components/your-task/your-task.component';
import { ClientThinkComponent } from './components/client-think/client-think.component';
import { WhatWeCanComponent } from './components/what-we-can/what-we-can.component';
import { QuotationComponent } from './components/quotation/quotation.component';
import { WhatIsChatbotComponent } from './components/what-is-chatbot/what-is-chatbot.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MoreAboutUsComponent } from './components/more-about-us/more-about-us.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { TrustUsComponent } from './components/trust-us/trust-us.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import * as Hammer from 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DemoBotComponent } from './components/demo-bot/demo-bot.component';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    pan: { direction: Hammer.DIRECTION_HORIZONTAL },
  };

  options = {
    touchAction: 'pan-y'
  };
}

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    CallbackComponent,
    AppHeaderComponent,
    OrderButtonComponent,
    WhyWeComponent,
    PriceComponent,
    YourTaskComponent,
    ClientThinkComponent,
    WhatWeCanComponent,
    QuotationComponent,
    WhatIsChatbotComponent,
    MainPageComponent,
    MoreAboutUsComponent,
    OurTeamComponent,
    CertificatesComponent,
    TrustUsComponent,
    ContactsComponent,
    MobileMenuComponent,
    DemoBotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
