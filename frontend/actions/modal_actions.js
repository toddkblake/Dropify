export const OPEN_MODAL = "OPEN_MODAL";
export const CLEAR_MODAL = "CLEAR_MODAL";

export const openModal = modal => ({
  type: OPEN_MODAL,
  modal
})

export const clearModal = () => ({
  type: CLEAR_MODAL
})
