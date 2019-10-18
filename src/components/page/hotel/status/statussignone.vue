<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12 mt-2">
          <VueSignaturePad
            id="signature"
            width="100%"
            height="500px"
            ref="signaturePad"
          />
        </div><br>
        <div class="fit row wrap justify-center items-center content-center">
        <div style="padding:2%" class=".col">
          <q-btn color="primary" @click="undo" label="undo" />
        </div>
        <div style="padding:2%" class=".col">
          <q-btn color="primary" @click="save" label="save" />
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    async save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      alert('Open DevTools see the save data.');
      console.log(isEmpty);
      console.log(data);
      this.$router.push({name : "statustwo"});
    },
  }
};
</script>

<style>
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
</style>
