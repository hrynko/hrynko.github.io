<template>
  <nav class="sidebar-navigation">
    <ul>
      <li>
        <g-link to="/blog/">Blog</g-link>
      </li>

      <li>
        <g-link to="/projects/">Projects</g-link>
      </li>

      <li>
        <g-link to="/about/">About</g-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.sidebar-navigation {
  margin: 2rem 0 3rem;
  font-family: 'Merriweather Sans', sans-serif;

  ul {
    margin: 0;
    list-style: none;
  }

  a {
    position: relative;
    text-decoration: none;

    &::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: -0.2em;
      width: 0;
      height: 0.1em;
      background-color: var(--color-link);
      opacity: 0.8;
      transition: 0.3s;
    }

    &:hover,
    &.active {
      &::before {
        width: 100%;
        left: 0;
      }
    }
  }

  @media screen and (max-width: 768px) and (min-width: 577px) {
    margin: 0;

    li {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media screen and (max-width: 576px) {
    margin: 1rem 0 0.5rem;

    ul {
      display: flex;
    }

    li {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
}
</style>
