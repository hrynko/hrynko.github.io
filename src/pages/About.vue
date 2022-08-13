<template>
  <Layout>
    <div class="content-box">
      <h1>About</h1>

      <p>
        My name is Aliaksei Hrynko (<code>[alʲaˈksʲɛj ɣrɨnˈkɔ]</code>, be:
        Аляксей Грынко), I am a software developer from Belarus. This is my
        personal website where I share my thoughts and ideas and talk about my
        projects.
      </p>

      <p>
        Here I bring up mainly technical topics that I am passionate about.
        Although I have worked with a variety of technologies, now I am more
        involved in web and, above all, frontend. Thus, you are most likely to
        find here something related to the following technologies that I work
        with and am inspired by:
      </p>

      <p>
        <IconJavaScript width="2em" height="2em" />
        <IconTypeScript width="2em" height="2em" />
        <IconNodeJs width="2em" height="2em" />
        <IconAngular width="2em" height="2em" />
        <IconReact width="2em" height="2em" />
        <IconVue width="2em" height="2em" />
        <IconJamstack width="2em" height="2em" />
        <IconPwaWide width="4em" height="2em" />
      </p>
    </div>
  </Layout>
</template>

<script>
import IconAngular from '~/components/icons/AngularIcon.vue'
import IconJamstack from '~/components/icons/JamstackIcon.vue'
import IconJavaScript from '~/components/icons/JavaScriptIcon.vue'
import IconNodeJs from '~/components/icons/NodeJsIcon.vue'
import IconPwaWide from '~/components/icons/PwaWideIcon.vue'
import IconReact from '~/components/icons/ReactIcon.vue'
import IconTypeScript from '~/components/icons/TypeScriptIcon.vue'
import IconVue from '~/components/icons/VueIcon.vue'

export default {
  metaInfo: {
    title: 'About',
  },
  components: {
    IconAngular,
    IconJamstack,
    IconJavaScript,
    IconNodeJs,
    IconPwaWide,
    IconReact,
    IconTypeScript,
    IconVue,
  },
}
</script>

<style lang="scss" scoped>
p:last-child {
  margin-bottom: 0;
}

svg + svg {
  margin-left: 4px;
}

code {
  white-space: nowrap;
}
</style>
