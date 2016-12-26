<style>
</style>
<template>
  <div>
    <div class="form-search is-empty form-item--small">
      <input id="search" type="search" placeholder="select agent" v-model="agentName" disabled>
      <button type="button" tabindex="-1" class="form-search__clear no-js--hidden icon-clear" data-list-clear=""><span class="aria--visible">Clear filter</span></button>
      <button id="search-button" class="form-search__submit" tabindex="-1" @click="showUserModal = true">
        <span class="icon-search"></span><span class="aria--visible">Search</span>
      </button>
    </div>
    <t-modal-box v-model="showUserModal" size="lg" >
      <h6 class="title--small">Select Agent</h6>
      <t-date-table
        ref="agentTable"
        :columns="agentTable.columns"
        :table-data="agentTable.data"
        :muti-select=false
        v-on:dt-select="rowSelected">
        ></t-date-table>
    </t-modal-box>
  </div>

</template>
<script>
  import {TModal, TDataTable} from 'aii-taurus';
  export default {
    components: {
      't-modal-box': TModal,
      't-date-table': TDataTable
    },
    data: function () {
      return {
        showUserModal: false,
        agentName: '',
        agentTable: {
          columns: [
            {field: 'id', name: 'Agent ID'},
            {field: 'name', name: 'Agent name'},
            {field: 'dept', name: 'Department'},
            {field: 'email', name: 'Email'}
          ],
          data: [
            {id: 1, name: 'zhouke', dept: 'CS', email: 'zhouke@asiainfo.com'},
            {id: 2, name: 'zengjie', dept: 'CS', email: 'zengjie@asiainfo.com'},
            {id: 3, name: 'pengwei', dept: 'CS', email: 'pengwei@asiainfo.com'},
            {id: 4, name: 'zhangwenxi', dept: 'BJ', email: 'zhangwx@asiainfo.com'}
          ]
        }
      };
    },
    watch: {
      'showUserModal': function (newValue) {
        if (newValue === false) {
          this.$refs.agentTable.unselectRow();
        }
      }
    },
    methods: {
      rowSelected: function (rowId) {
        let agent = this.agentTable.data[rowId];
        this.agentName = agent.name;
        this.$emit('selected-agent', agent);
        this.showUserModal = false;
      },
      getNameById: function (id) {
        let _name = '';
        for (let agent of this.agentTable.data) {
          if (agent.id === id) {
            _name = agent.name;
            break;
          }
        }
        return _name;
      },
      clear: function () {
        this.agentName = '';
      }
    }
  };
</script>
