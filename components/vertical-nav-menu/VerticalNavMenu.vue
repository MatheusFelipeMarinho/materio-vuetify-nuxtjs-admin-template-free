<template>
  <v-navigation-drawer
    :value="isDrawerOpen"
    app
    width="260"
    class="app-navigation-menu"
    :right="$vuetify.rtl"
    @input="(val) => $emit('update:is-drawer-open', val)"
  >
    <!-- Navigation Header -->
    <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
      <NuxtLink to="/" exact class="d-flex align-center text-decoration-none">
        <v-img
          :src="require('@/assets/images/logos/aviato.png')"
          max-height="250px"
          max-width="200px"
          alt="logo"
          contain
          eager
          class="app-logo me-3"
        ></v-img>
        <v-slide-x-transition>
          <h2 class="app-title text--primary">Kapsula</h2>
        </v-slide-x-transition>
      </NuxtLink>
    </div>

    <!-- Navigation Items -->
    <v-list expand shaped class="vertical-nav-menu-items pr-5 mt-5">
      <template v-for="(row, index) in navigator">
        <div class="mt-5" :key="index">
          <nav-menu-link
            :title="row.title"
            :to="row.to"
            :icon="row.icon"
          ></nav-menu-link>
        </div>
      </template>

      <!-- <nav-menu-section-title title="USER INTERFACE"></nav-menu-section-title> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import NavMenuLink from './components/NavMenuLink.vue'
import navigation from './navigation'

export default {
  components: {
    NavMenuLink,
  },
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: null,
    },
  },
  data() {
    return {
      navigator: navigation,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/plugins/vuetify/default-preset/preset/overrides.scss';

.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
}

// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;
  .v-navigation-drawer--mini-variant & {
    transform: translateX(-4px);
  }
}

@include theme(app-navigation-menu) using ($material) {
  background-color: map-deep-get($material, 'background');
}

.app-navigation-menu {
  .v-list-item {
    &.vertical-nav-menu-link {
      :deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}

// You can remove below style
// Upgrade Banner
.app-navigation-menu {
  .upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
