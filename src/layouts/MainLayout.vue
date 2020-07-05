<template >
    <q-layout view="lHh Lpr lFf" >
        <q-page-container >
            <transition :name="transitionName"
            >
                <router-view />
            </transition >
        </q-page-container >
    </q-layout >
</template >

<script >
export default {
  name: 'MainLayout',
  data() {
    return {
      transitionName: 'slide-up',
    };
  },
  watch: {
    $route(to, from) {
      if (to.name === 'success') {
        this.transitionName = 'slide-up';
      } else if (from.name === 'success') {
        this.transitionName = 'slide-down';
      } else if (to.path === '/') {
        this.transitionName = 'slide-left';
      } else {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right';
      }
    },
  },
  mounted() {
    console.log(this.$store.$router);
  },
};
</script >
<style >
    .slide-left-enter-active {
        animation: leftComming 1s;
        position: fixed;
        width: 100%;

    }

    .slide-left-leave-active {
        animation: rightGoing 1s;
        position: fixed;
        width: 100%;
    }

    @keyframes leftComming {
        from {
            transform: translateX(-100%);
            z-index: 1;

        }
        to {
            transform: translateX(0);
            opacity: 1;

        }
    }

    @keyframes rightGoing {
        from {
            transform: translateX(0);

        }
        to {
            transform: translateX(100%);
        }
    }

    .slide-right-enter-active {
        animation: rightComming 1s;
        opacity: 0;
        z-index: 1;
        position: fixed;
        width: 100%;
    }

    .slide-right-leave-active {
        animation: leftGoing 1s;
        position: fixed;
        width: 100%;
    }

    @keyframes rightComming {
        from {
            transform: translateX(100%);
            z-index: 1;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes leftGoing {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
            opacity: 0;
        }
    }

    .slide-down-enter-active {
        animation: upComming 1s;
        opacity: 0;
        position: fixed;
        width: 100%;
    }

    .slide-down-leave-active {
        animation: downGoing 1s;
        position: fixed;
        width: 100%;
    }

    @keyframes upComming {
        from {
            transform: translateY(-100%);
            z-index: 1;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes downGoing {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(100%);
            opacity: 0;
        }
    }

    .slide-up-enter-active {
        animation: downComing 1s;
        opacity: 1;
        position: fixed;
        width: 100%;
    }

    .slide-up-leave-active {
        animation: upGoing 1s;
        position: fixed;
        width: 100%;
    }

    @keyframes upGoing {
        from {
            transform: translateY(0);
            z-index: 1;
        }
        to {
            transform: translateY(-100%);
            opacity: 0;
            z-index: 1;
        }

    }

    @keyframes downComing {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(0px);
            opacity: 1;

        }

    }
</style >
