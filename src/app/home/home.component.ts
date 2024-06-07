import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any[] = [];
  newComment: string = '';
  selectedFile: File | null = null;
  showAddPostModal: boolean = false;
  newPostCaption: string = '';
  userId: any;
  userdata: any;
  likedPost: any;

  constructor(
    private postService: PostService,
    private sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.userdata = JSON.parse(sessionStorage.getItem('user') || 'null');
    this.loadPosts();
  }

  loadPosts(): void {
    this.spinner.show(); // Show the spinner
    this.postService.getPosts().subscribe(
      (res: any) => {
        this.posts = res.response.reverse();
        this.spinner.hide(); // Hide the spinner once data is loaded
        console.log(this.posts);
      },
      (error) => {
        setTimeout(() => {
          this.spinner.hide();
        }, 2000);
      
        // this.spinner.hide(); 
        // Hide the spinner in case of error
        console.error(error);
      }
    );
  }

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  toggleLike(post: any): void {
    const currentUserId = this.userdata.id;
    const userLike = post.likes.find((like: any) => like.user_id === currentUserId && like.isLiked === true);

    if (userLike) {
      this.postService.unlikePost(post._id, currentUserId).subscribe((res: any) => {
        console.log(res, 'dislike');
        post.likes = post.likes.filter((like: any) => like.user_id !== currentUserId);
        post.likes_count -= 1;
      });
    } else {
      this.postService.likePost(post._id, currentUserId).subscribe((res: any) => {
        console.log(res, 'like');
        post.likes.push({ isLiked: true, user_id: currentUserId });
        post.likes_count += 1;
      });
    }
  }

  toggleComments(post: any): void {
    post.showComments = !post.showComments;
    console.log(post);
  }

  addComment(post: any): void {
    const payload = {
      user_id: post.user_id._id,
      content: this.newComment
    };

    this.postService.addComment(payload, post._id).subscribe((res: any) => {
      post.comments = res.comments; // Assuming res contains the updated list of comments
      post.showComments = true; // Ensure comments are shown
      this.newComment = ''; // Clear the input field after adding a comment
    });
  }

  deleteComment(post: any, comment: any): void {
    this.postService.deleteComment(post._id, comment._id).subscribe(() => {
      const index = post.comments.indexOf(comment);
      if (index > -1) {
        post.comments.splice(index, 1);
        post.comments_count--;
      }
    });
  }

  repost(post: any): void {
    const newPost = { ...post, _id: '', createdAt: new Date().toISOString(), user_id: { _id: '', userName: 'You', email: '' } };
    this.posts.unshift(newPost);
  }

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  openAddPostModal(): void {
    this.showAddPostModal = true;
  }

  closeAddPostModal(): void {
    this.showAddPostModal = false;
    this.selectedFile = null;
    this.newPostCaption = '';
  }

  addPost(): void {
    if (this.selectedFile && this.newPostCaption.trim()) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('content', this.newPostCaption);
      formData.append('user_id', this.userdata.id.toString());

      this.postService.AddPosts(formData).subscribe((res: any) => {
        console.log(res);
        this.closeAddPostModal();
      });
    }
  }

  // getRelativeTime(date: string): string {
  //   return formatDistanceToNow(new Date(date), { addSuffix: true });
  // }
}
