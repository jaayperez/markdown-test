<template>
    <div>
        <div class="title">
            <h2>{{ title }}</h2>
        </div>

        <div>
           <div class="row">
                <div class="col-md-6">
                   <textarea v-model="markdown" cols="80" rows="15" @input="postMark"></textarea>
                </div>
                <div id="preview" class="col-md-6" v-html="compiledMarkdown"></div>
           </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Pusher from "pusher-js";
import marked from "marked";
export default {
  name: "Home",
  data() {
    return {
      title: "Realtime Markdown Editor",
      markdown: "",
      channel : {}
    };
  },
  computed : {
    compiledMarkdown: function () {
      return marked(this.markdown, { sanitize: true })
    }
  },
  created() {
    let pusher = new Pusher("YOUR_APP_KEY", {
      cluster: process.env.PUSHER_APP_CLUSTER,
      encrypted: true,
      authEndpoint: 'http://localhost:3000/pusher/auth',
    });
    this.channel = pusher.subscribe("private-markdown");
    this.channel.bind("client-new-text", data => {
      this.markdown = data;
    });
  },
  methods: {
    postMark: function(e) {
      const text = e.target.value;
      this.channel.trigger("client-new-text", text);
    }
  }
};
</script>


<style>
.title {
  margin-bottom: 40px;
}
#preview {
  border: 2px solid;
  text-align: left;
}
</style>
