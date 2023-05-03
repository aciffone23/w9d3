import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    
    this.toggleButton = toggleButton;
    // this.followState = followState
    this.handleClick = this.handleClick.bind(this);
  
    this.toggleButton.addEventListener('click', this.handleClick);
  }

  async handleClick(event) {
    event.preventDefault()
    console.log(this.followState)
    this.followState === 'Followed' ? this.unfollow() : this.follow();
  }

  async unfollow() {
    this.toggleButton.innerText = 'Follow!'
    this.followState = "Unfollowed"
    // Your code here
  }

  async follow() {
    this.toggleButton.innerText = "Unfollow!"
    this.followState = "Followed"
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }

}