import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { CallbackComponent } from './callback/callback.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { OrderButtonComponent } from './order-button/order-button.component';
import { WhyWeComponent } from './why-we/why-we.component';
import { PriceComponent } from './price/price.component';
import { YourTaskComponent } from './your-task/your-task.component';
import { ClientThinkComponent } from './client-think/client-think.component';
import { WhatWeCanComponent } from './what-we-can/what-we-can.component';
import { QuotationComponent } from './quotation/quotation.component';
import { WhatIsChatbotComponent } from './what-is-chatbot/what-is-chatbot.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MoreAboutUsComponent } from './more-about-us/more-about-us.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { CertificatesComponent } from './certificates/certificates.component';

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
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
