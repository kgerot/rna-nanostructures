import { entry } from "django-airavata-common-ui";
import ViewExperimentContainer from "./containers/ViewExperimentContainer.vue";

entry(Vue => {
  new Vue({
    render(h) {
      return h(ViewExperimentContainer, {
        props: {
          initialFullExperimentData: this.fullExperimentData,
          launching: this.launching
        }
      });
    },
    data() {
      return {
        fullExperimentData: null,
        launching: false
      };
    },
    beforeMount() {
      this.fullExperimentData = JSON.parse(this.$el.dataset.fullExperimentData);
      if ("launching" in this.$el.dataset) {
        this.launching = JSON.parse(this.$el.dataset.launching);
      }
    }
  }).$mount("#view-experiment");
});
