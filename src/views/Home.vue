<template>
<div class="homepage_dashboard">
      <section class="homepage_dashboard_sidebar">
      <div class="homepage_dashboard_sidebar_wrapper">
        <span class="homepage_dashboard_sidebar_wrapper_logo"> Buffalo HRMS </span>
        <ul class="homepage_dashboard_sidebar_wrapper_ul">
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="/Home" class="homepage_dashboard_sidebar_wrapper_ul_li_a active">
            <img class="homepage_dashboard_sidebar_wrapper_ul_li_a_icon" src="../assets/home.svg" alt="" srcset="">
             Home</a>
          </li>
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="" class="homepage_dashboard_sidebar_wrapper_ul_li_a">
            <img class="homepage_dashboard_sidebar_wrapper_ul_li_a_icon" src="../assets/employee.svg" alt="" srcset="">
              Employees</a>
          </li>
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
          <a href="" class="homepage_dashboard_sidebar_wrapper_ul_li_a">
            <img class="homepage_dashboard_sidebar_wrapper_ul_li_a_icon" src="../assets/payroll.svg" alt="" srcset="">
            Payroll</a>
          </li>
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="" class="homepage_dashboard_sidebar_wrapper_ul_li_a">
            <img class="homepage_dashboard_sidebar_wrapper_ul_li_a_icon" src="../assets/leave-management.svg" alt="" srcset="">
              Leave Management</a>
          </li>
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="" class="homepage_dashboard_sidebar_wrapper_ul_li_a">
            <img class="homepage_dashboard_sidebar_wrapper_ul_li_a_icon" src="../assets/report.svg" alt="" srcset="">
              Reports</a>
          </li>
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="/Admin" class="homepage_dashboard_sidebar_wrapper_ul_li_a">
            <img class="homepage_dashboard_sidebar_wrapper_ul_li_a_icon" src="../assets/setting.svg" alt="" srcset="">
            Admin Setup</a>
          </li>
        </ul>
      </div>
    </section>
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
        <div class="homepage_dashboard_body_content_sectioner">
          <span class="homepage_dashboard_body_content_card_sect_t">Overview</span>
        <div class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span">Employees</span>
          <span class="homepage_dashboard_body_content_card_span_no">{{ employeeStats.Employees.count }} </span>
          <span class="homepage_dashboard_body_content_card_span_icon">
             <img class="homepage_dashboard_body_content_card_span_icon_img" src="../assets/employee.svg" alt="" srcset="">
          </span>
          <span class="homepage_dashboard_body_content_card_span_diff"> <span>0.3%</span> than last year </span>
          <a href="/login" class="homepage_dashboard_body_content_card_span_info">Show Employees</a>
        </div>
          <div class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span">Leave Days Taken</span>
          <span class="homepage_dashboard_body_content_card_span_no">56%</span>
          <span class="homepage_dashboard_body_content_card_span_icon">
             <img class="homepage_dashboard_body_content_card_span_icon_img" src="../assets/leave-management.svg" alt="" srcset="">
          </span>
          <span class="homepage_dashboard_body_content_card_span_diff"> <span>0.3%</span> than last year </span>
          <a href="/login" class="homepage_dashboard_body_content_card_span_info">Check Leave status</a>
        </div>
         <div class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span">Gender Distribution</span>
          <span class="homepage_dashboard_body_content_card_span_no_g_d">28</span>
          <span class="homepage_dashboard_body_content_card_span_no_g_d_2">28</span>
          <span class="homepage_dashboard_body_content_card_span_icon"></span>
          <a href="/login" class="homepage_dashboard_body_content_card_span_info">Show Employees</a>
        </div>
        </div>
        <div class="homepage_dashboard_body_content_sectioner">
        <span class="homepage_dashboard_body_content_card_sect_t">Pending Tasks</span>
      <div class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span">User creation</span>
          <span class="homepage_dashboard_body_content_card_span_tasks_1">  Pending at <strong>Kiokos's </strong> queue </span>
          <span class="homepage_dashboard_body_content_card_span_tasks_2"> Submitted on 19th June 2021  </span>
          <a href="/login" class="homepage_dashboard_body_content_card_span_tasks_link">Show Employees</a>

        </div>
        <div class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span">Payroal upload</span>
            <span class="homepage_dashboard_body_content_card_span_tasks_1">  Pending at <strong>Kiokos's </strong> queue </span>
          <span class="homepage_dashboard_body_content_card_span_tasks_2"> Submitted on 19th June 2021  </span>
          <a href="/admin" class="homepage_dashboard_body_content_card_span_tasks_link">Show Employees</a>
        </div>
      </div>
      </div>
    </section>
    <section class="homepage_dashboard_right">
    <v-date-picker
      is-dark
      is-range
      style=" .v-picker__body{
    with:27rem"
      />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import menuTemplate from './Menu_template.vue'
export default {
  name: 'Home',
  components: {
    menuTemplate
  },
  data: () => ({
    headerDate: new Date().toUTCString()
  }),
  computed: mapState({
    employeeStats: state => state.dashboard.employeeStats
  }),
  created () {
    this.$store.dispatch('dashboard/getEmployeeStats')
  }
}
</script>
<style lang="scss" scoped>
@import './styles/home_dashboard.scss';

</style>
