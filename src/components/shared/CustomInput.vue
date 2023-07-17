<template>
  <div class="wrapper-input">
    <input
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    errorMessage: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  inheritAttrs: false,
  data() {
    return {
      isValid: true,
      error: "",
    };
  },
  watch: {
    modelValue() {
      this.validate();
    },
  },
  methods: {
    validate() {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(this.modelValue);

        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }

        return hasPassed;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
.wrapper-input {
  position: relative;
  display: inline-flex;
}
.custom-input {
  height: 40px;
  width: 100%;
  margin: 0 auto;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: grey;
  }

  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>
