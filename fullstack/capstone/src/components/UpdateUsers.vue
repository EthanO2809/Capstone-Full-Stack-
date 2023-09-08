<template>
    <div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        @click="openEditModal(user.UserID)"
        data-bs-toggle="modal"
        :data-bs-target="'#pexampleModal' + user.UserID"
      >
        Update Users
      </button>
      <!-- Modal -->
      <div
        class="modal fade"
        :id="'pexampleModal' + user.UserID"
        tabindex="-1"
        :aria-labelledby="'pexampleModalLabel' + user.UserID"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="pexampleModalLabel">
                Update Users
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
                <center>
                  <input
                placeholder="First Name"
                type="text"
                v-model="editingUser.UserName"
                required
              />
              <input
                placeholder="Age"
                type="number"
                v-model="editingUser.UserAge"
                required
              />
              <input
                placeholder="Email"
                type="text"
                v-model="editingUser.EmailAdd"
                required
              />
              <input
                placeholder="Role"
                type="text"
                v-model="editingUser.UserRole"
                required
              />
              <input
                placeholder="product image"
                type="text"
                v-model="editingUser.UserUrl"
                required
              />
            </center>

            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="updateUser(user.UserID)"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
     props: ["user"],
  data() {
    return {
      editingUser: {
        // Initialize the editingUser object
        UserName: "",
        UserAge: null,
        EmailAdd: "",
        UserRole: "",
        UserUrl: "",
      },
    };
  },
  computed: {
    thisUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    openEditModal(UserID) {
      this.editingUser = {
        ...this.$store.state.Users.find((user) => user.UserID === UserID),
      };
    },
    updateProduct(UserID) {
      this.$store
        .dispatch("updateUser", {
          UserID: UserID,
          ...this.editingUser,
        })
        .then(() => {
          console.log("User successfully updated");
          setTimeout(() => {
            location.reload();
          }, 500);
        })
        .catch((err) => {
          console.error("Error while updating: ", err);
        });
    },
  },
};
</script>