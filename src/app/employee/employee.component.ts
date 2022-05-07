import { HttpClient } from '@angular/common/http';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { PostsService } from '../posts.service';
import { Post } from './posts.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm : FormGroup;
  posts: Post[] = [];
  error :any = null;
  

  constructor(private postService : PostsService) { }

  ngOnInit(): void {

    this.employeeForm = new FormGroup({

      title : new FormControl(null, Validators.required),
      content : new FormControl(null, Validators.required)

    })

    this.getPosts();
  }

  getPosts(){
    this.postService.fetchPosts()
    .subscribe((response) => 
    {this.posts = response;},
    error => {
      console.log(error);
      this.error = error.message;
    }
    );
  }

    onCreatePost(){
      const postData = this.employeeForm.value;
      this.postService.createPost(postData).subscribe((response) => {
        this.getPosts();
      }
      )
    }

    deletePosts(event:Event){
      event.preventDefault();
      this.postService.clearPosts();
      this.posts =[];
    }
  }

