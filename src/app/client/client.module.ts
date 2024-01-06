import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ClientRoutingModule } from './client-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostMayLikeComponent } from './post-may-like/post-may-like.component';
import { LatestTopPostsComponent } from './latest-top-posts/latest-top-posts.component';
import { UserTopReviewComponent } from './user-top-review/user-top-review.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { PostCardProfileComponent } from './post-card-profile/post-card-profile.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MyCommentCardComponent } from './my-comment-card/my-comment-card.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';


@NgModule({
  declarations: [

    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    PostCardComponent,
    PostMayLikeComponent,
    LatestTopPostsComponent,
    UserTopReviewComponent,
    CreatePostComponent,
    CommentCardComponent,
    CreateCommentComponent,
    PostCardProfileComponent,
    UpdatePostComponent,
    UpdateProfileComponent,
    MyCommentCardComponent,
    UpdateCommentComponent
 
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
