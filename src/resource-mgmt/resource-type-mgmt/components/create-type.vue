<template>
  <transition name="fade" mode="out-in">
    <div v-show="isShow" class="border gradient-line--with-border">
      <form action="" class="grid-row padding-whole">
        <div class="col-md-6 block--form">
          <div class="form-item">
            <label for="type_name">{{ $t('resTypeMgmt.typeName') }}</label>
            <input id="type_name" type="text" :placeholder="$t('resTypeMgmt.typeNamePlaceholder')">
          </div>
        </div>
        <div class="col-md-6 block--form">
          <div class="form-item">
            <label for="type_number">{{ $t('resTypeMgmt.typeNum') }}</label>
            <input id="type_number" type="text" :placeholder="$t('resTypeMgmt.typeNumPlaceholder')">
          </div>
          <div class="text--right padding-leader--large">
            <button class="button button--naked toright--small">{{ $t('resTypeMgmt.typeCancelBtn') }}</button>
            <button class="button button--action">{{ $t('resTypeMgmt.typeSaveBtn') }}</button>
          </div>
        </div>
      </form>
    </div>
  </transition>
</template>
<script>
  export default {
    props: {
      isShow: {
        require: true,
        default: false,
        type: Boolean
      }
    },
    data () {
      return {
        msg: 'hello resource'
      };
    },
    mounted () {
      this.$nextTick(function () {
        console.log(this.$el);
      });
    }
  };
</script>
