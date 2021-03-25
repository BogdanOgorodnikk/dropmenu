import { mount } from '@vue/test-utils'
import DropMenu from '../../src/components/DropMenu.vue'

describe('DropMenu.vue', () => {
  const wrapper = mount(DropMenu)
  it('show menu when click on search input', () => {
    expect(wrapper.vm.show).toBe(false)
    const input = wrapper.find('.drop-menu__block--info')
    input.trigger('click')
    expect(wrapper.vm.show).toBe(true)
  })

  it('close menu when click outside input', async () => {
    await wrapper.setData({ show: true })
    const block = wrapper.find('.drop-menu')
    block.trigger('click')
    expect(wrapper.vm.show).toBe(false)
  })

  it('clear search on click [x]', async () => {
    await wrapper.setData({ searchElement: 'Bogdan' })
    const block = wrapper.find('.drop-menu__block--closed')
    block.trigger('click')
    expect(wrapper.vm.searchElement).toBe('')
  })

  it('change focus position on key up', async () => {
    await wrapper.setData({ show: true })
    expect(wrapper.vm.top).toBe(19.375)
    const input = wrapper.find('.drop-menu__block--info')
    input.trigger('keydown.up')
    expect(wrapper.vm.top).toBe(19.375)
  })

  it('change focus position on key down', async () => {
    await wrapper.setData({ show: true })
    expect(wrapper.vm.top).toBe(19.375)
    const input = wrapper.find('.drop-menu__block--info')
    input.trigger('keydown.down')
    expect(wrapper.vm.top).toBe(38.75)
  })

  it('change searchElement on key enter', async () => {
    await wrapper.setData({ show: true })
    expect(wrapper.vm.searchElement).toBe('')
    const input = wrapper.find('.drop-menu__block--info')
    input.trigger('keydown.enter')
    expect(wrapper.vm.searchElement).toBe('Andorra')
  })
})
