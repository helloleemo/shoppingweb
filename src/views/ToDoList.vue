<template>
  <div class="wrapper">
    <div class="container">
      <div class="frame border rounded p-4 pb-5">
        <h3 class="fw-bold text-center" style="font-family: 'Pattaya'">To Do List</h3>
        <div class="input-group mb-3">
          <input
            v-model="content.text"
            type="text"
            class="form-control"
            placeholder="write something"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            style="border: 2px solid black"
            @keyup.enter="addBtn"
          />
          <button
            @click="addBtn"
            class="btn btn-dark"
            type="button"
            id="button-addon2"
            style="border: 2px solid black; border-left: none"
          >
            +
          </button>
        </div>
        <ul v-for="(item, index) in temp" :key="index" class="list-group list-group-flush">
          <li class="list-group-item mt-1">
            <div class="d-flex text-center">
              <button v-if="item.isCompleted" @click="finishedList(index)" class="btn p-0 pe-2">
                <i class="bi bi-check-lg"></i>
              </button>
              <button v-else @click="finishedList(index)" class="btn p-0 pe-2">
                <i class="bi bi-square"></i>
              </button>
              <span :class="{ done: item.isCompleted }">{{ item.text }}</span>
              <div class="edit ms-auto">
                <i
                  @click="setPriority(item)"
                  :style="{ color: priorityColors[item.priorityIndex] }"
                  class="priority pe-2 bi bi-circle-fill small"
                ></i>
                <button
                  @click="deleteList(index)"
                  type="button"
                  class="btn small text-end p-0"
                  aria-label="Close"
                >
                  <i class="bi bi-trash3"></i>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temp: [],
      content: {
        text: '',
        isCompleted: false,
        isEditing: false,
        priorityIndex: 0
      },
      priorityColors: ['gray', 'rgb(184, 51, 51)', '#3dbeff', '#fddb00']
    }
  },
  methods: {
    addBtn() {
      if (this.content.text !== '') {
        this.temp.push({
          ...this.content,
          isCompleted: false,
          isEditing: false,
          priorityIndex: 0
        })
      }
      this.content.text = ''
    },
    finishedList(i) {
      this.temp[i].isCompleted = !this.temp[i].isCompleted
    },
    deleteList(i) {
      this.temp.splice(i, 1)
    },
    setPriority(item) {
      item.priorityIndex = (item.priorityIndex + 1) % this.priorityColors.length
    }
  }
}
</script>

<style lang="scss">
.done {
  text-decoration: line-through;
  transition: all 0.3s ease;
}
.priority {
  color: #3dbeff;
}
.wrapper {
  height: 100vh;
  background-color: #3dbeff;
  background-image: linear-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 2px),
    linear-gradient(to right, rgba(255, 255, 255, 0.2) 2px, rgba(0, 0, 0, 0.1) 2px);
  // background-size: 50px 50px;

  .frame {
    background-color: rgb(255, 245, 231);
  }
  .form-control:focus {
    outline: none !important;
  }
  li {
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.01);
    }
  }
  .bi {
    cursor: pointer;
    &:hover {
      color: gray;
    }
  }
}
</style>
