<template>
  <div class="drop-menu" @click.self="removeDropMenu">
    <div class="drop-menu__block">
      <input type="text" class="drop-menu__block--info" 
      @click.prevent="showDropMenu" 
      v-model="searchElement" 
      placeholder="Search" 
      @keydown.up="moveFocusUp(filteredElements)"
      @keydown.down="moveFocusDown(filteredElements)"
      @keydown.enter="selectElement(selectedElement)"
      @input="changeSearching(filteredElements)">
      <span class="drop-menu__block--closed" @click.prevent="clearSearch" v-if="searchElement !== ''">[X]</span>
    </div>
    <ul class="drop-menu__list" v-if="show" ref="scroll">
      <input type="text" ref="selectedFocus" class="selected-focus" 
      :value="filteredElements[0]" 
      @click.prevent="selectElement(filteredElements[index])" 
      readonly>
      <li class="drop-menu__list--item" v-for="(arr, index) in filteredElements" :key="index" 
      @click.prevent="selectElement(arr)" 
      @keyup.enter="selectElement(arr)">
        {{arr}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'DropMenu',
  data: () => ({
    arrs: ["Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia & Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Georgia",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Kosovo",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "Vatican City"],
    searchElement: '',
    selectedElement: '',
    show: false,
    top: 19.375,
    index: 0
  }),
  methods: {
    showDropMenu() {
      this.show = true
      this.selectedElement = this.arrs[0]
    },
    removeDropMenu() {
      this.show = false
    },
    clearSearch() {
      this.searchElement = '';
      this.index = 0;
      this.top = 19.375;
    },
    selectElement(element) {
      this.searchElement = element
      this.show = false
    },
    changeSearching(arr) {
      this.show = true
      this.top = 19.375;
      this.index = 0
      this.selectedElement = arr[0]
      this.$refs['selectedFocus'].style.top = this.top + 'px';
    },
    moveFocusDown(arr) {
      const inp = this.$refs['selectedFocus'];
      this.index += 1;
      if(this.index > arr.length - 1) {
        this.index -= 1;
        return false
      }
      this.top += 19.375;
      if(this.top >= 58.125) {
        this.$refs['scroll'].scrollTop += 19.375
      }
      inp.style.top = this.top + 'px';
      inp.value = arr[this.index]
      this.selectedElement = inp.value
    },
    moveFocusUp(arr) {
      const inp = this.$refs['selectedFocus'];
      this.index -= 1;
      if(this.index < 0) {
        this.index = 0;
        return false
      }
      this.top -= 19.375;
      this.$refs['scroll'].scrollTop -= 19.375
      inp.style.top = this.top + 'px';
      inp.value = arr[this.index]
      this.selectedElement = inp.value
    }
  },
  computed: {
    filteredElements() {
      return this.arrs.filter((arr) => {
        if(this.searchElement != '') {
          return arr.toLowerCase().indexOf(this.searchElement.toLowerCase()) > -1
        } else {
          return arr
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .drop-menu {
    margin: 100px auto;
    max-width: 1000px;
  }
  .drop-menu__block {
    position: relative;
  }
  .drop-menu__block--info {
    display: block;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 4px;
    font-size: 16px;
    padding-right: 26px;
  }
  .drop-menu__block--closed {
    display: block;
    position: absolute;
    top: 10px;
    left: 592px;
    cursor: pointer;
  }
  .drop-menu__list {
    margin: 0 auto;
    list-style: none;
    text-align: center;
    border: 1px solid #000;
    width: 232px;
    overflow-y: scroll;
    height: 98px;
    background: #ccc;
    position: relative;
  }
  .drop-menu__list--item {
    border-bottom: 1px solid #000;
    cursor: pointer;
    &:hover {
      background: #fff;
    }
  }
  .selected-focus {
    background: #fff;
    position: relative;
    top: 19.375px;
    border: 0px;
    width: 213px;
    text-align: center;
    font-size: 16px;
    margin-top: -1px;
    cursor: pointer;
  }
</style>
