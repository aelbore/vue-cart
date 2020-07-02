import { css } from 'goober'
import { useStore } from 'vuex'
import { computed } from 'vue'

const styles = css `
  width: 100%;
  height: 4.5rem;
  background: #41b883;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  a {
    display: block;
    text-decoration: var(--text-decoration, none);
    color: var(--color, black);
    border-radius: var(--border-radius, 0);
    padding: var(--padding, 0);
    cursor: pointer;
  }

  .router-link-active {
    background: var(--background-active, white);
    color: var(--color-active, black);
    cursor: auto;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 0 1rem;
    border-radius: 5px;
    a {
      --color: white;
      --border-radius: 5px;
      --padding: 0.5rem 1rem;
    }
    &:hover {
      background: white;
      color: #00179b;
    }
    &:hover a {
      --color: black;
    }
  }
`

export default {
  name: 'Navigation',
  setup() {
    const store = useStore()
    const cartItemNumber = computed(() => store.getters.cartItemNumber)
    
    return { cartItemNumber }
  },
  template: `
    <header class="${styles}">
      <nav>
        <ul>
          <li>
            <router-link to="/" exact>Products</router-link>
          </li>
          <li>
            <router-link to="/carts">Carts ({{ cartItemNumber }})</router-link>
          </li>
        </ul>
      </nav>
    </header>
  `
}