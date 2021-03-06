import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PlantComponent } from './plant/plant.component';
import { TorchComponent } from './torch/torch.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { NonogramComponent } from './nonogram/nonogram.component';
import { BoardComponent } from './board/board.component';
import { BallsComponent } from './balls/balls.component';
import { GlowpuzzleComponent } from './glowpuzzle/glowpuzzle.component';
import { RoomComponent } from './room/room.component';
import { MiddleComponent } from './middle/middle.component';
import { ReachedComponent } from './reached/reached.component';
import { CreateroomComponent } from './createroom/createroom.component';
import { JEOPARDYBOARDComponent } from './jeopardyboard/jeopardyboard.component';
import { TryComponent } from './try/try.component';
import { MystartComponent } from './mystart/mystart.component';
import { Story1Component } from './story1/story1.component';
import { PuzComponent } from './puz/puz.component';
import { RestartDialogComponent } from './restart-dialog/restart-dialog.component';

const routes: Routes = [
  {
    path: "signin",
    component: SigninComponent
  }
  ,
  {
    path: "nonogram",
    component: NonogramComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "plant",
    component: PlantComponent
  },
  {
    path:"torch",
    component: TorchComponent
  },
  {
    path:"balls",
    component: BallsComponent
  },
  {
    path:"room",
    component: RoomComponent
  },
  {
    path:"middle",
    component: MiddleComponent
  },
  {
    path:"board",
    component: BoardComponent
  },
  {
    path: "puzzle",
    component: PuzzleComponent
  },
  {
    path: "jeopardy",
    component: JEOPARDYBOARDComponent
  },
  {
    path: "reachedhome",
    component: ReachedComponent
  },
  {
    path: "glow",
    component: GlowpuzzleComponent
  },
  {
    path: "createroom",
    component: CreateroomComponent
  },
  {
    path: "mystart",
    component: MystartComponent
  },
  {
    path: "try",
    component: TryComponent
  },{
    path:"story",
    component: Story1Component
  },{
    path:'puz',
    component:PuzComponent
  },
  {
    path:'puzok',
    component:RestartDialogComponent
  }
  ,
  { path: '', redirectTo: '/mystory', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
