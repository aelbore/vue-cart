import Navigation from './components/Navigation.js'
import { css } from 'goober'

const styles = css `
  button {
    font: inherit;
    padding: 0.25rem 0.5rem;
    background: #35495e;
    color: white;
    border-color: #35495e;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  button:hover,
  button:active {
    color: #35495e;
    border-color: currentColor;
    background-color: white;
  }
`

export default {
  name: 'App',
  template: `
    <div class="${styles}">
      <Navigation />
      <router-view></router-view>
    </div>
  `,
  components: {
    Navigation
  }
}