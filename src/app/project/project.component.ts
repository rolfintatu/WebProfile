import { Component, OnInit } from '@angular/core';
import { RepoModel } from '../Models/RepoModel';
import { GithubService } from '../github.service';
import {  } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public repos: RepoModel[] = [];

  constructor(public gitHub: GithubService ) { }

  ngOnInit(): void {
    this.gitHub.GetMyRepos().subscribe(
      (data) => this.repos = data
    );
  }

}
