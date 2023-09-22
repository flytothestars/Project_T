<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Добавить
  </button>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Добавить</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="col-md-7 col-lg-12">
            <h4 class="mb-3">Информация</h4>
            <form class="needs-validation" novalidate="">
              <div class="row g-3">
                <div class="col-sm-6">
                  <label for="number_lots" class="form-label">Номер лота</label>
                  <input
                    type="text"
                    class="form-control"
                    id="number_lots"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div class="invalid-feedback">
                    Поле обязательно для заполнения
                  </div>
                </div>

                <div class="col-sm-6">
                  <label for="name" class="form-label">Наименование</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div class="invalid-feedback">
                    Поле обязательно для заполнения
                  </div>
                </div>

                <div class="col-md-5">
                  <label for="source" class="form-label"
                    >Источник закупки</label
                  >
                  <select class="form-select" id="source" required="">
                    <option value="">Выберите источник</option>
                    <option>Самрук казына</option>
                    <option>Госзакуп</option>
                    <option>Недро</option>
                  </select>
                  <div class="invalid-feedback">
                    Поле обязательно для заполнения
                  </div>
                </div>

                <div class="col-md-4">
                  <label for="method" class="form-label">Способ закупки</label>
                  <select class="form-select" id="method" required="">
                    <option value="">Выберите способ</option>
                    <option>Запрос ценовых предложений</option>
                    <option>Запрос ценовых предложений на понижение</option>
                    <option>Открытый тендер</option>
                    <option>Открытый тендер на понижение</option>
                  </select>
                  <div class="invalid-feedback">
                    Поле обязательно для заполнения
                  </div>
                </div>
              </div>

              <hr class="my-4" />
              <div class="row g-3">
                <div class="col-sm-4">
                  <label for="count" class="form-label">Количество</label>
                  <input
                    type="text"
                    class="form-control"
                    id="count"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div class="invalid-feedback">
                    Поле обязательно для заполнения
                  </div>
                </div>

                <div class="col-sm-4">
                  <label for="unit" class="form-label"
                    >Единица измерение</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="unit"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div class="invalid-feedback">
                    Поле обязательно для заполнения
                  </div>
                </div>

                <div class="col-sm-4">
                  <label for="price" class="form-label"
                    >Цена за единицу</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="price"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div class="invalid-feedback">
                    Поле обязательно для заполнения
                  </div>
                </div>
              </div>
              <hr class="my-4" />
              <div class="row g-3">
                <div class="col-sm-10">
                  <label for="delivery_address" class="form-label"
                    >Место поставки</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="delivery_address"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div class="invalid-feedback">
                    Поле обязательно для заполнения
                  </div>
                </div>
                <div class="col-sm-2">
                  <label for="delivery_time" class="form-label">Срок</label>
                  <input
                    type="text"
                    class="form-control"
                    id="delivety_time"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div class="invalid-feedback">
                    Поле обязательно для заполнения
                  </div>
                </div>
              </div>
              <hr class="my-4" />
              <div class="row g-3">
                <div class="col-sm-6">
                  <label for="date_start" class="form-label"
                    >Начало прием заявок</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="date_start"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div class="invalid-feedback">
                    Поле обязательно для заполнения
                  </div>
                </div>
                <div class="col-sm-6">
                  <label for="date_end" class="form-label">Окончание прием заявок</label>
                  <input
                    type="text"
                    class="form-control"
                    id="date_end"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div class="invalid-feedback">
                    Поле обязательно для заполнения
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Закрыть
          </button>
          <button type="button" class="btn btn-primary">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTenderModal",
};
</script>
