<template>
  <div
    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
  >
    <h1 class="h2">Список тендеров</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
        <AddTenderModal />
        <button type="button" class="btn btn-sm btn-outline-secondary">
          Экспорт
        </button>
      </div>
    </div>
  </div>
  <div class="table-responsive small">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">Номер лота</th>
          <th scope="col">Источник</th>
          <th scope="col">Способ закупки</th>
          <th scope="col">Наименование</th>
          <th scope="col">Количество</th>
          <th scope="col">Ед. изм.</th>
          <th scope="col">Цена за ед.</th>
          <th scope="col">Сумма</th>
          <th scope="col">Место поставки</th>
          <th scope="col">Срок</th>
          <th scope="col">Коммент</th>
          <th scope="col">Статус</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>3330919</td>
          <td>СК</td>
          <td>ЗЦП</td>
          <td>Холодильник</td>
          <td>96</td>
          <td>штука</td>
          <td>154 990,00</td>
          <td>14 879 040,00</td>
          <td>Мангыстау обл.</td>
          <td>45 к.д.</td>
          <td></td>
          <td>Обработке</td>
        </tr>
      
        <tr class="mt-1">
          <td>3330919</td>
          <td>СК</td>
          <td>ЗЦП</td>
          <td>Холодильник</td>
          <td>96</td>
          <td>штука</td>
          <td>154 990,00</td>
          <td>14 879 040,00</td>
          <td>Мангыстау обл.</td>
          <td>45 к.д.</td>
          <td></td>
          <td>Обработке</td>
        </tr>
        <tr>
          <td>3330919</td>
          <td>СК</td>
          <td>ЗЦП</td>
          <td>Холодильник</td>
          <td>96</td>
          <td>штука</td>
          <td>154 990,00</td>
          <td>14 879 040,00</td>
          <td>Мангыстау обл.</td>
          <td>45 к.д.</td>
          <td></td>
          <td>Обработке</td>
        </tr>
        <tr>
          <td>3330919</td>
          <td>СК</td>
          <td>ЗЦП</td>
          <td>Холодильник</td>
          <td>96</td>
          <td>штука</td>
          <td>154 990,00</td>
          <td>14 879 040,00</td>
          <td>Мангыстау обл.</td>
          <td>45 к.д.</td>
          <td></td>
          <td>Обработке</td>
        </tr>
      </tbody>
    </table>
  </div>  
</template>

<script>
import AddTenderModal from "../modal/AddTenderModal.vue";
// import { ref } from "vue";
// import ProgressBar from "../modal/ProgressBar.vue";

export default {
  name: "ListTender",
  components: {
    AddTenderModal,
    // ProgressBar,
  },
  // setup() {
  //   const completed = ref(0);
  //   completed.value = 100;

  //   return { completed };
  // },
  methods: {
    addTender() {
      this.$refs.EditAddTenderModal;
    },
  },
};
</script>
