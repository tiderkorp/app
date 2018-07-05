import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CoinComponent } from './coin/coin.component';
import { InvestmentComponent } from './investment/investment.component';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'coin', component: CoinComponent },
  { path: 'investment', component: InvestmentComponent },
  { path: '**', redirectTo: '/main', pathMatch: 'full' },
];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, { useHash: true });
