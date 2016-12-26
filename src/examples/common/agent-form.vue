<style>
</style>
<template>
  <div class="sg-component">
    <div class="box--white-bottom-gradient"></div>
    <div class="block--content border">
      <div class="sg-component__label">
        <h3 class="title--xsmall title--block">{{state === 'create' ? 'Create' : 'Modify'}} Entity information</h3>
        <div class="container grid-row">
          <div class="col-md-6 block--form">
            <div class="form-item ">
              <label>CustomerName</label>
              <input v-model="agent.customer"/>
            </div>
            <div class="form-item ">
              <label>Phone number</label>
              <input type="text" v-model="agent.phone">
            </div>
            <div class="form-item ">
              <label>Email</label>
              <input type="email" v-model="agent.email">
            </div>
            <div class="form-item ">
              <label>Status</label>
              <t-status-select :list="statusOptions" @on-value-change="onStatuChg"></t-status-select>
            </div>
            <div class="block--col">
              <div class="float--left row">
                <button class="button button--action trailer--small" @click="saveEntity">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import {TSelectDropdown} from 'aii-taurus';
  import constant from './constant';
  export default {
    components: {
      't-status-select': TSelectDropdown
    },
    data: function () {
      return {
        statusOptions: [],
        agent: this.entity
      };
    },
    props: {
      state: {
        type: String,
        default: 'create'
      },
      entity: {
        type: Object,
        default: function () {
          return {
            customer: '',
            email: '',
            phone: '',
            status: ''
          };
        }
      }
    },
    methods: {
      getStatus: function () {
        var vm = this;
        for (let key in constant.Status) {
          vm.statusOptions.push({
            label: constant.Status[key],
            value: Number(key)
          });
        }
      },
      saveEntity: function () {
        this.$emit('submit-value', this.agent);
        this.agent = {};
      },
      onStatuChg: function (value) {
        this.agent.status = value;
      }
    },
    created: function () {
      this.getStatus();
    }
  };
</script>
