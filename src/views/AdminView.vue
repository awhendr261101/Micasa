<template>
    <div class="table-responsive">
    <div class="container-fluid" admin>
      
        <h2>welcome to our Admin</h2>
        <div class="row">
            <table class="table table-hover table-light">
              <thead>
                <tr>
                  <th scope="col" colspan="3">User</th>
                  <th scope="col" colspan="3">User Name</th>
                  <th scope="col" >User Role</th>
                  <th scope="col" >User Email</th>
                  <th scope="col" >Password</th>
                  <th scope="col" colspan="2">Management</th>
  
                </tr>
              </thead>
              <tbody table>

                <tr v-for="(user, index) in users" :key="index">
                    <td colspan="3"> <img :src="user.userProfile"  alt="${element.productName}" loading="lazy" style="width: 6rem;"> </td>
                    <td colspan="3">{{ user.firstName }} {{ user.lastName }}</td>
                    <td>{{ user.userRole }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <td>{{ user.userPass }}</td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="editbtn" @click="updateUID(user)" data-bs-toggle="modal" data-bs-target="#exampleModalLong" style="width: 5rem;">
                        Edit
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form class="form" @submit.prevent="register">
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="First name" v-model="payload.firstName"
                                            required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="last name" v-model="payload.lastName"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="Age" v-model="payload.userAge" required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="Gender" placeholder="Gender" v-model="payload.Gender"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="userRole" placeholder="userRole" v-model="payload.userRole"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="email" placeholder="Email address" v-model="payload.emailAdd"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="password" placeholder="Password" v-model="payload.userPass"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="url" placeholder="Profile link" v-model="payload.userProfile"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper d-md-flex d-block justify-content-between">
                                        <button type="submit" class="btn btn-success">Submit</button>
                                        <button type="reset" class="btn btn-dark">Reset</button>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="savechangesbtn" @click="updateUser()">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>

                        <br> 

                        <button style="width: 5rem;" type="button" @click="userDelete(user.userID)" class="deletebtn" :id="user.userID" deleteProduct ><i class="fa fa-angle-left"></i> Delete</button>  
                    </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                    <td>
                    <!-- Button trigger modal -->
                    <button type="button" class="addbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    ADD User
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form class="form">
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="First name" v-model="payload.firstName"
                                            required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="last name" v-model="payload.lastName"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="Age" v-model="payload.userAge" required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="Gender" placeholder="Gender" v-model="payload.Gender"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="userRole" placeholder="userRole" v-model="payload.userRole"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="email" placeholder="Email address" v-model="payload.emailAdd"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="password" placeholder="Password" v-model="payload.userPass"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="url" placeholder="Profile link" v-model="payload.userProfile"
                                                required />
                                        </span>
                                    </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" @click="register" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                  </td>
                  <td colspan="8" class="hidden-xs"></td>
                  <td></td>
                </tr>
              </tfoot>
            </table>

            <table class="table table-hover table-light">
              <thead>
                <tr>
                  <th scope="col" colspan="3">Product</th>
                  <th scope="col" colspan="3">Product Name</th>
                  <th scope="col" >Product Description</th>
                  <th scope="col" >Quantity</th>
                  <th scope="col" >amount</th>
                  <th scope="col" >Category</th>
                  <th scope="col" colspan="2">Management</th>
  
                </tr>
              </thead>
              <tbody table>

                <tr v-for="(prod, index) in products" :key="index">
                    <td colspan="3"> <img :src="prod.prodUrl"  alt="${element.productName}" loading="lazy" style="width: 6rem;"> </td>
                    <td colspan="3">{{ prod.prodName }} </td>
                    <td>{{ prod.prodDescription }}</td>
                    <td>{{ prod.quantity }}</td>
                    <td>{{ prod.amount }}</td>
                    <td>{{ prod.Category }}</td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="editbtn" @click="updateID(prod)" data-bs-toggle="modal" data-bs-target="#editProd" style="width: 5rem;">
                        Edit
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="editProd" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form class="form" @submit.prevent="">
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product name" v-model="prodPayload.prodName"
                                            required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product Desc" v-model="prodPayload.prodDescription"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="Quantity" v-model="prodPayload.quantity" required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="amount" v-model="prodPayload.amount"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Category" v-model="prodPayload.Category"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product Url" v-model="prodPayload.prodUrl"
                                                required />
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" @click="updateProd()" class="savechangesbtn" >Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>

                        <br> 

                        <button style="width: 5rem;" type="button" @click="prodDelete(prod.prodID)" class="deletebtn" :id="prod.prodID" deleteProduct ><i class="fa fa-angle-left"></i> Delete</button>  
                    </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <!-- Button trigger modal -->
                    <button type="button" class="addbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    ADD PRODUCT
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form class="form" >
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product name" v-model="prodPayload.prodName"
                                            required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product Desc" v-model="prodPayload.prodDescription"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="Quantity" v-model="prodPayload.quantity" required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="amount" v-model="prodPayload.amount"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Category" v-model="prodPayload.Category"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product Url" v-model="prodPayload.prodUrl"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper d-md-flex d-block justify-content-between">
                                        <button type="submit" class="successbtn">Submit</button>
                                        <button type="reset" class="btn btn-dark">Reset</button>
                                    </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" @click="addProd" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                  </td>
                  <td colspan="9" class="hidden-xs"></td>
                  <td><a href="#" class="checkoutbtn">Checkout <i class="fa fa-angle-right"></i></a></td>
                </tr>
              </tfoot>
            </table>
        </div>
      </div>
    </div>
  

</template>
<script setup>
import { computed, onMounted } from 'vue'
import { reactive } from 'vue';
// import { useStore } from 'vuex';

import store from '@/store';
// const store = useStore()
const payload = {
    firstName: '',
    lastName: '',
    userAge: 0,
    Gender: '',
    userRole: '',
    emailAdd: '',
    userPass: '',
    userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png'
}

let prodPayload = {
      prodName: "",
      prodDescription: "",
      quantity: 0,
      amount: 0,
      Category: "",
      prodUrl: ""
}



// const prodPayload = null;

function register() {
    console.log(payload);
    store.dispatch('register', payload)
}

function addProd() {
    console.log(prodPayload);
    store.dispatch('addAProduct', prodPayload)
}

function userDelete(id) {
    console.log(id);
    store.dispatch('deleteUser', id)
}

let uID
function updateUID(user) {
    console.log(user);
    
    uID = user.userID
}

function updateUser(User) {

const data = {
    id : uID,
    load : payload
}

console.log(data);


store.dispatch('updateUser', data)
}

//////////////////////////////////////////////
let pID
function updateID(prod) {
    pID = prod.prodID
}

function updateProd(prod) {

    const data = {
        id : pID,
        load : prodPayload
    }

    console.log(data);
    
    
    store.dispatch('updateProduct', data)
}
function prodDelete(id) {
    console.log(id);
    store.dispatch('deleteProduct', id)
    
}

const users = computed(
    () => store.state.users
)

const products = computed(
    () => store.state.products
)
onMounted(() => {
    store.dispatch('fetchUsers')
    store.dispatch('fetchProducts')
}) 

</script>
