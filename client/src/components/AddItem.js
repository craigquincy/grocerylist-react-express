import React from 'react'

const AddItem = ({ createItem }) => {
  const onSubmit= (event) => {
    event.preventDefault()
    let form = event.target
    let name = form["name"].value.trim()
    let quantity = form["quantity"].value.trim()

    console.log("adding", name, quantity)
    createItem({name, quantity})
  }

  return (
    <form id="addForm" method="POST" onSubmit={onSubmit}>
      <input name="name" required />
      <input name="quantity" type="number" required />
      <button type="submit">Save</button>
    </form>
  )
}

export default AddItem