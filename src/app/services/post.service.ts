import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  uri = environment.url;

  constructor(private http: HttpClient) { }

  AddPosts(data: any) {
    return this.http.post(`${this.uri}addpost`, data);
  }

  getUserPosts(userId: string) {
    return this.http.get(`${this.uri}/user_posts/${userId}`);
  }

  getPosts() {
    return this.http.get(`${this.uri}getposts`);
  }

  addPost(userId: string, formData: FormData) {
    formData.append('user_id', userId);
    return this.http.post(`${this.uri}user_posts/${userId}/addpost`, formData);
  }

  likePost(postId: string, userId: string) {
    return this.http.post(`${this.uri}like_post/${postId}`, { user_id: userId });
  }

  unlikePost(postId: string, userId: string) {
    return this.http.post(`${this.uri}unlike_post/${postId}`, { user_id: userId });
  }

  addComment(data:any,postId:any) {
    return this.http.post(`${this.uri}add_comment/${postId}`, data);
  }

  deleteComment(postId: string, commentId: string) {
    return this.http.delete(`${this.uri}delete_comment/${postId}/${commentId}`);
  }
}
