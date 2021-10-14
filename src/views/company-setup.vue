<template>
  <div class="homepage_dashboard admin">
   <menuTemplate />
    <!-- BODY CONTENT HERE -->
    <section class="homepage_dashboard_body">
      <div class="homepage_dashboard_body_header">
        <span class="homepage_dashboard_body_header_span"> {{headerDate}} </span>
          <div class="homepage_dashboard_body_header_container">
        <img src="" alt="" class="homepage_dashboard_body_header_container_img">
        <span class="homepage_dashboard_body_header_container_name">John Doe</span>
        <span class="homepage_dashboard_body_header_container_email">example@example.com</span>
          </div>
      </div>
      <div class="homepage_dashboard_body_content">
        <div class="homepage_dashboard_body_wrapper">
          <a href="/Admin" class="homepage_dashboard_body_wrapper_back">Back</a>
          <span class="homepage_dashboard_body_wrapper_path">Home > <strong> Company setup </strong></span>

          <!-- BODY CONTENT -->
          <div class="homepage_dashboard_body_wrapper_inner_container">
            <div class="homepage_dashboard_body_wrapper_inner_container_wrapper">
              <div class="homepage_dashboard_body_wrapper_inner_container_model_box">
                <div class="homepage_dashboard_body_wrapper_inner_container_model_box_header">
                  <ul class="homepage_dashboard_body_wrapper_inner_container_model_box_ul">
                    <li class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li active">
                      <a href="/company-setup" class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li_a">
                        Organization Set-Up
                      </a>
                    </li>
                       <li class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li">
                      <a href="/divisions" class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li_a">
                       Divisions
                      </a>
                    </li>
                       <li class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li">
                      <a href="/branches" class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li_a">
                        Branches
                      </a>
                    </li>
                       <li class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li">
                      <a href="/departments" class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li_a">
                        Departments
                      </a>
                    </li>
                       <li class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li">
                      <a href="#" class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li_a">
                       Organization Chart
                      </a>
                    </li>
                  </ul>
                  </div>

                  <!-- CONTENT GOES HERE -->
                  <div class="homepage_dashboard_body_wrapper_inner_container_model_box_body">
                    <div class="homepage_dashboard_body_wrapper_inner_container_model_box_body_wrapper">
                      <form action="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form">
                        <div class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_ctrl">
                        <label for="organization_name" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label">
                          Organization Name
                        </label>
                        <input type="text" v-model="entity.businessname" name="organization_name" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input" v-bind:class="[ editHandler ]" >
                        </div>
                           <div class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_ctrl">
                        <label for="organization_name" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label">
                          Has Branches
                        </label>
                        <label for="organization_name" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label check">
                        Yes
                        </label>
                        <input type="checkbox"  name="organization_name" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input check_yes" v-bind:class="[ editHandler ]" >
                        <label for="organization_name" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label check_no">
                          No
                        </label>
                         <input type="checkbox" name="organization_name" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input check_no" v-bind:class="[ editHandler ]" >
                        </div>
                        <div class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_ctrl">
                        <label for="kra_pin" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label">
                        KRA PIN
                        </label>
                        <input type="text" v-model="entity.pin" name="kra_pin" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input" v-bind:class="[ editHandler ]">
                        </div>
                        <div class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_ctrl">
                         <label for="email" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label">
                          Email
                        </label>
                        <input type="email" v-model="email" name="email" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input" v-bind:class="[ editHandler ]">
                        </div>
                        <div class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_ctrl">

                          <label for="country" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label">
                          Country
                        </label>
                        <input type="text" v-model="entity.country" name="country" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input" v-bind:class="[ editHandler ]">
                        </div>
                        <div class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_ctrl">

                          <label for="city" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label">
                          City
                        </label>
                        <input type="text" v-model="entity.city" name="city" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input" v-bind:class="[ editHandler ]">
                        </div>
                        <div class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_ctrl">

                          <label for="address" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label">
                          Address
                        </label>
                        <input type="text" v-model="entity.address" name="address" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input" v-bind:class="[ editHandler ]">
                        </div>
                        <div class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_ctrl">

                          <label for="postal_code" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label">
                          Postal Code
                        </label>
                        <input type="text" v-model="entity.postalcode" name="postal_code" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input" v-bind:class="[ editHandler ]">
                        </div>
                        <div class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_ctrl">

                          <label for="phone_number" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label">
                          Phone Number
                        </label>
                        <input type="phone" v-model="entity.phone_no" name="phone_number" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input" v-bind:class="[ editHandler ]">
                        </div>
                        <div class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_ctrl">

                          <label for="phone_number_1" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label">
                           Phone Number 1
                        </label>
                        <input type="phone" v-model="phone_number_1" name="phone_number_1" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input" v-bind:class="[ editHandler ]">
                        </div>
                        <div class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_ctrl">

                         <label for="phone_number_2" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label">
                           Phone Number 1
                        </label>
                        <input type="phone" v-model="phone_number_2" name="phone_number_2" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input" v-bind:class="[ editHandler ]">
                        </div>
                      </form>
                      <div class="homepage_dashboard_body_wrapper_inner_container_model_box_body_profile">
                        <div class="homepage_dashboard_body_wrapper_inner_container_model_box_body_profile_wrapper">
                          <img :src="entity.company_logo" alt="" class="homepage_dashboard_body_wrapper_inner_container_model_box_body_profile_wrapper_img">
                          <button type="file" class="homepage_dashboard_body_wrapper_inner_container_model_box_body_profile_wrapper_btn">
                            + Upload Company Logo
                          </button>
                      <form action="" class="">
                         <div class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_ctrl">
                        <label for="organization_name" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label">
                          Sector
                        </label>
                        <input type="text" v-model="entity.sector" name="organization_name" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input" v-bind:class="[ editHandler ]" >
                        </div>
                         <div class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_ctrl">
                        <label for="organization_name" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label">
                          Website Name
                        </label>
                        <input type="text" v-model="entity.website_url" name="organization_name" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input" v-bind:class="[ editHandler ]" >
                        </div>
                         <div class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_ctrl">
                        <label for="organization_name" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label">
                          Twitter
                        </label>
                        <input type="text" v-model="entity.social_twitter" name="organization_name" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input" v-bind:class="[ editHandler ]" >
                        </div>
                         <div class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_ctrl">
                        <label for="organization_name" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label">
                          Facebook
                        </label>
                        <input type="text" v-model="entity.social_facebook" name="organization_name" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input" v-bind:class="[ editHandler ]" >
                        </div>
                         <div class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_ctrl">
                        <label for="organization_name" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_label">
                          Instagram
                        </label>
                        <input type="text" v-model="entity.social_instagram" name="organization_name" id="" class="homepage_dashboard_body_wrapper_inner_container_model_box_bod_form_input" v-bind:class="[ editHandler ]" >
                        </div>
                      </form>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
                <button  class="homepage_dashboard_body_wrapper_inner_container_wrapper_btn" v-on:click="startEdit"  v-bind:class="[ editer ]" > Edit company details </button>
                <button class="homepage_dashboard_body_wrapper_inner_container_wrapper_btn cancel" v-on:click="closeEdit" v-bind:class="[ hideItem ]"> Cancel </button>
                <button class="homepage_dashboard_body_wrapper_inner_container_wrapper_btn save" v-on:click="closeEdit" v-bind:class="[ hideItem ]" > Save </button>

            </div>
          </div>
          <!-- END OF BODY CONTENT -->
        </div>
      </div>
    </section>

  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import menuTemplate from './Menu_template.vue'
export default {
  name: 'company-setup',
  components: {
    menuTemplate
  },
  data: () => ({
    headerDate: new Date().toUTCString(),
    hideItem: 'hidden',
    editer: 'visible',
    editHandler: 'notActive',
    email: '',
    phone_number_1: '',
    phone_number_2: ''
  }),
  computed: mapState({
    user: state => state.session.user,
    entity: state => state.entity.entity
  }),
  watch: {
    user: function (val) {
      console.log('user changed')
      this.search(this.user.entityid)
    }
  },
  methods: {
    ...mapActions({ search: 'entity/search' }),
    startEdit: function (e) {
      e.preventDefault()
      this.editHandler = 'Active'
      this.hideItem = 'show'
      this.editer = 'hidden'
    },
    closeEdit: function (e) {
      e.preventDefault()
      this.editHandler = 'notActive'
      this.editer = 'show'
      this.hideItem = 'hidden'
    }
  },
  created () {
    this.$store.dispatch('entity/search', this.user.entityid)
  }
}
</script>
<style lang="scss" scoped>
@import './styles/home_dashboard.scss';
@import './styles/admin.scss';
@import './styles/company_setup.scss';
</style>
