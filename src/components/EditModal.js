import {url} from "../App";

function EditModal(props) {
  function confirmHandler() {
    const updateUrl = url + "/" + props.updateId; 
    fetch(updateUrl, {
      method: "PUT"
    }).then((response) => {
      if(!response.ok) {
        alert('Update failed');
        props.closeModal();
      } else {
        props.getItems();
      }
    });
  }

  function cancelHandler() {
    props.closeModal();
  }

  return (
    <div className="modal">
      <p>Enter the task.</p>
      <form>
            <input/>
          </form>
      <button className="btn btn--alt" onClick={confirmHandler}>
        Confirm
      </button>
      <button className="btn" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

export default EditModal;
