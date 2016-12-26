<template>
  <div class="container">
    <header class="padding-trailer--small leader">
      <span class="text-size--36 text-light">
        {{ $t('resTypeMgmt.headline') }}
      </span>
      <div class="pull-right">
        <button class="button button--default toright" @click="changeLang">{{ $t('resTypeMgmt.changeLang') }}</button>
        <button class="button button--default toright">{{ $t('resTypeMgmt.refreshBtn') }}</button>
        <button class="button button--action" @click="showForm">{{ $t('resTypeMgmt.createTypeBtn') }}</button>
      </div>
    </header>
    <!--/title area-->
    <!--form area-->
    <div id="create_type--wrapper">
      <r-create-type :is-show="operator.showForm"></r-create-type>
    </div>

    <!--/form area-->
    <!--table area-->
    <div class="box--white-top-gradient border border--without-top">
      <!-- table filter -->
      <div class="border--bottom clear padding-whole box--greyed header-grey mobile-hidden">
        <form class="grid-row grid-row--gutter-none">
          <div class="col-sm-11">
            <div class="grid-row">
              <div class="col-sm-3">
                <div class="form-search is-empty form-item--small">
                  <input type="search" placeholder="Search" value="" class="valid">
                  <button type="button" tabindex="-1" class="form-search__clear icon-clear" style="display: none;">
                    <span class="aria--visible"></span>
                  </button>
                  <button class="form-search__submit" tabindex="-1">
                    <span class="icon-search"></span><span class="aria--visible"></span>
                  </button>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="form-item form-item--small">
                  <input type="text" placeholder="Please Enter">
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-1">
            <button class="button button--small button--default pull-right">Reset</button>
          </div>
        </form>
      </div>
      <!-- /table filter -->
      <!-- table operation -->
      <div class="text--right border--bottom leader padding-trailer--med toleft toright">
        <button class="button button--small button--default">Modity</button>
        <button class="button button--small button--default">Delete</button>
        <div class="drop download-drop dropdown inline-block" data-component="dropdown">
          <button class="button button--default button--small" role="button" data-toggle="dropdown">
                                <span class="button__label icon--right icon-arrow-down">
                                    <span class="button__text">
                                        Export
                                    </span>
                                </span>
          </button>
          <div class="drop dropdown__content">
            <ul>
              <li><a class="icon-excel">Download as CSV</a></li>
              <li><a class="icon-excel">Download as XLSX</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- /table operation -->
      <!-- table component -->
      <table class="table table--adv" role="grid">
        <thead>
        <tr role="row">
          <th class="form-checkbox invoices__table__column--checkbox all col--compact-5 form-checkbox--single sorting_disabled">
            <!--<input type="checkbox" id="select-all-rows" value="all" data-component="checkbox"-->
            <!--data-alias="selectAll">-->
            <!--<label for="select-all-rows"></label>-->
            <a class="form-checkbox--result" tabindex="1" href="#" role="link-hc" idx="4" data-state="some-selected"> <label> </label> </a>
          </th>
          <th class="invoices__table__column min-createdDate-a sorting_desc">Issued</th>
          <th class="invoices__table__column--description min-invoiceNumber-a sorting_asc">
            Description
          </th>
          <th class="invoices__table__column all sorting">Status</th>
          <th class="invoices__table__column min-dueDate-a sorting">Due date</th>
          <th class="invoices__table__column all sorting">Amount</th>
          <th class="invoices__table__column min-balanceAmount-a sorting">Balance</th>
        </tr>
        </thead>
        <tbody>
        <tr role="row" class="odd">
          <td class="form-checkbox invoices__table__column--checkbox col--compact-5  form-checkbox--single ">
            <input type="checkbox" id="check-02" name="invoices" value="6456456;343,43;Paid">
            <label for="check-02"></label>
          </td>
          <td class="min-createdDate-a sorting_1">2015.12.11</td>
          <td class="  min-invoiceNumber-a">
            <p>Credit note</p><span class="text-size--13"><a href="#">#6456456</a></span>
          </td>
          <td>Paid</td>
          <td class="  min-dueDate-a">2015.12.11</td>
          <td>547,81 kr.</td>
          <td class="  min-balanceAmount-a"><span class="">343,43 kr.</span></td>
        </tr>
        <tr role="row" class="even row-selected">
          <td class=" col--compact-5 form-checkbox form-checkbox--single invoices__table__column--checkbox">
            <input type="checkbox" checked="" id="check-03" name="invoices" value="6456456;343,43;Paid">
            <label for="check-03"></label>
          </td>
          <td class="min-createdDate-a sorting_1">row-selected</td>
          <td class="  min-invoiceNumber-a">
            <p>Credit note</p><span class="text-size--13"><a href="#">#6456456</a></span>
          </td>
          <td>Paid</td>
          <td class="  min-dueDate-a">2015.12.11</td>
          <td>547,81 kr.</td>
          <td class="  min-balanceAmount-a"><span class="">343,43 kr.</span></td>
        </tr>
        <tr role="row" class="odd row-selected row--error">
          <td class=" col--compact-5 form-checkbox form-checkbox--single invoices__table__column--checkbox">
            <input type="checkbox" id="check-04" checked="" name="invoices" value="6456456;343,43;Paid">
            <label for="check-04"></label>
          </td>
          <td class="min-createdDate-a sorting_1"><p>row-selected</p>

            <p>row--error</p></td>
          <td class="  min-invoiceNumber-a">
            <p>Credit note</p><span class="text-size--13"><a href="#">#6456456</a></span>
          </td>
          <td>Paid</td>
          <td class="  min-dueDate-a">2015.12.11</td>
          <td>547,81 kr.</td>
          <td class="  min-balanceAmount-a"><span class="">343,43 kr.</span></td>
        </tr>
        <tr role="row" class="even row-selected row--disable">
          <td class=" col--compact-5 form-checkbox form-checkbox--single invoices__table__column--checkbox">
            <input type="checkbox" id="check-05" name="invoices" value="6456456;343,43;Paid">
            <label for="check-05"></label>
          </td>
          <td class="min-createdDate-a sorting_1"><p>row-selected</p>

            <p>row--disable</p></td>
          <td class="  min-invoiceNumber-a">
            <p>Credit note</p><span class="text-size--13"><a href="#">#6456456</a></span>
          </td>
          <td>Paid</td>
          <td class="  min-dueDate-a">2015.12.11</td>
          <td>547,81 kr.</td>
          <td class="  min-balanceAmount-a"><span class="">343,43 kr.</span></td>
        </tr>
        <tr role="row" class="odd">
          <td class=" col--compact-5 form-checkbox form-checkbox--single invoices__table__column--checkbox">
            <input type="checkbox" id="check-06" name="invoices" value="6456456;343,43;Paid">
            <label for="check-06"></label>
          </td>
          <td class="min-createdDate-a sorting_1">2015.12.11</td>
          <td class="  min-invoiceNumber-a">
            <p>Credit note</p><span class="text-size--13"><a href="#">#6456456</a></span>
          </td>
          <td>Paid</td>
          <td class="  min-dueDate-a">2015.12.11</td>
          <td>547,81 kr.</td>
          <td class="  min-balanceAmount-a"><span class="">343,43 kr.</span></td>
        </tr>
        <tr role="row" class="even">
          <td class=" col--compact-5 form-checkbox form-checkbox--single invoices__table__column--checkbox">
            <input type="checkbox" id="check-6456457" name="invoices" value="6456456;343,43;Paid">
            <label for="check-6456457"></label>
          </td>
          <td class="min-createdDate-a sorting_1">2015.12.11</td>
          <td class="  min-invoiceNumber-a">
            <p>Credit note</p><span class="text-size--13"><a href="#">#6456456</a></span>
          </td>
          <td>Paid</td>
          <td class="  min-dueDate-a">2015.12.11</td>
          <td>547,81 kr.</td>
          <td class="  min-balanceAmount-a"><span class="">343,43 kr.</span></td>
        </tr>
        </tbody>
      </table>
      <!-- /table component -->
      <div class="padding-whole select-items mobile-hidden">
        <!--select menu-->
        <div data-component="select" data-alias="lengthMenu" class="form-select form-select--length form-item--inline form-select--small">
          <select name="length">
            <option value="10" selected="selected">Vis 10</option>
            <option value="50">Vis 50</option>
            <option value="100">Vis 100</option>
            <option value="500">Vis 500</option>
          </select>

          <div class="form-select__field">Vis 10</div>
        </div>
        <!--/select menu-->
        <!-- default pager-->
        <div class="pager pager--default pull-right" data-component="pager" data-alias="pagination">
          <a class="pager__button previous" data-selector="page-previous">previous</a>
                        <span data-selector="pages">
                            <a class="pager__button" data-selector="page-button" data-page-number="1">1</a>
                            <a class="pager__button" data-selector="page-button" data-page-number="2">2</a>
                            <a class="pager__button" data-selector="page-button" data-page-number="3">3</a>
                            <a class="pager__button current" data-selector="page-button" data-page-number="4">4</a>
                            <a class="pager__button" data-selector="page-button" data-page-number="5">5</a>
                            <span class="pager__elipsis">…</span>
                            <a class="pager__button" data-selector="page-button" data-page-number="24">24</a>
                        </span>
          <a class="pager__button next" data-selector="page-next">next</a>
        </div>
        <!-- default pager-->
      </div>
    </div>
    <!--table area-->
  </div>
</template>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
<script>
  import {taurus} from 'aii-taurus';
  import CreateType from './components/create-type.vue';

  export default {
    components: {
      'r-create-type': CreateType
    },
    data () {
      return {
        operator: {
          state: 'create',
          showForm: false
        }
      };
    },
    methods: {
      changeLang () {
        taurus.lang = (taurus.lang === 'cn') ? 'en' : 'cn';
      },
      showForm () {
        this.operator.showForm = true;
      }
    }
  };
</script>
