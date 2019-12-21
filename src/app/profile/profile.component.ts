import { Component, OnInit } from '@angular/core';

export class leaderboardObject {
  name: String;
  experience: String;
  constructor(name: String, experience: String) {
    this.name = name;
    this.experience = experience;
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  leaderboard: Array<leaderboardObject>;
  city_leaderboard: Array<leaderboardObject>;
  state_leaderboard: Array<leaderboardObject>;
  country_leaderboard: Array<leaderboardObject>;
  city_active: Boolean;
  state_active: Boolean;
  country_active: Boolean;
  
  constructor() { }

  ngOnInit() {
    this.city_leaderboard = [new leaderboardObject("City Leaderboard", "Pro")];
    this.state_leaderboard = [new leaderboardObject("State Leaderboard", "Expert")];
    this.country_leaderboard = [new leaderboardObject("Country Leaderboard", "Master")];
    this.city_active = true;
    this.state_active = false;
    this.country_active = false;
    this.leaderboard = this.city_leaderboard;
  }

  cityLeaderboard() {
    if (this.city_active == false) {
      this.state_active = false;
      this.country_active = false;
      this.city_active = true;
      this.leaderboard = this.city_leaderboard;
    }
  }

  stateLeaderboard() {
    if (this.state_active == false) {
      this.country_active = false;
      this.city_active = false;
      this.state_active = true;
      this.leaderboard = this.state_leaderboard;
    }
  }

  countryLeaderboard() {
    if (this.country_active == false) {
      this.city_active = false;
      this.state_active = false;
      this.country_active = true;
      this.leaderboard = this.country_leaderboard;
    }
  }
}
