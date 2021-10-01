<template>
  <div class="homepage_dashboard admin">
    <sidebar class="homepage_dashboard_sidebar">
      <div class="homepage_dashboard_sidebar_wrapper">
        <span class="homepage_dashboard_sidebar_wrapper_logo"> Buffalo HRMS </span>
        <ul class="homepage_dashboard_sidebar_wrapper_ul">
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="/Home" class="homepage_dashboard_sidebar_wrapper_ul_li_a active"> <font-awesome-icon icon="archway" /> Home</a>
          </li>
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="" class="homepage_dashboard_sidebar_wrapper_ul_li_a">Employees</a>
          </li>
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
          <a href="" class="homepage_dashboard_sidebar_wrapper_ul_li_a">Payroll</a>
          </li>
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="" class="homepage_dashboard_sidebar_wrapper_ul_li_a">Leave Management</a>
          </li>
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="" class="homepage_dashboard_sidebar_wrapper_ul_li_a">Reports</a>
          </li>
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="/Admin" class="homepage_dashboard_sidebar_wrapper_ul_li_a">Admin Setup</a>
          </li>
        </ul>
      </div>
    </sidebar>
    <section class="homepage_dashboard_body">
      <div class="homepage_dashboard_body_header">
        <span class="homepage_dashboard_body_header_span"> {{headerDate}} </span>
      </div>
      <div class="homepage_dashboard_body_content">
        <div class="homepage_dashboard_body_content_sectioner">
          <span class="homepage_dashboard_body_content_card_sect_t">Admin Setup</span>
        <div class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span_icon"></span>
          <span class="homepage_dashboard_body_content_card_span">Jobs Setup</span>
          <span class="homepage_dashboard_body_content_card_span_details">View customer details</span>
        </div>
          <div class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span_icon"></span>
          <span class="homepage_dashboard_body_content_card_span">Leave Setup</span>
          <span class="homepage_dashboard_body_content_card_span_details">Leave setup</span>
        </div>
         <div class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span_icon"></span>
          <span class="homepage_dashboard_body_content_card_span">Company Set-up</span>
          <span class="homepage_dashboard_body_content_card_span_details">About Organization</span>
        </div>
          <div class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span_icon"></span>
          <span class="homepage_dashboard_body_content_card_span">System Set-up</span>
          <span class="homepage_dashboard_body_content_card_span_details">System setup</span>
        </div>
        </div>
      </div>
    </section>
    <sidebar class="homepage_dashboard_right">
     <div class="homepage_dashboard_right_container">
        <img src="" alt="" class="homepage_dashboard_right_container_img">
        <span class="homepage_dashboard_right_container_name">John Doe</span>
        <span class="homepage_dashboard_right_container_email">example@example.com</span>
     </div>
    <v-date-picker
      is-dark
      is-range
      />
    </sidebar>
  </div>
</template>
<script>
export default {
  name: 'Admin',
  data: () => ({
    headerDate: new Date().toUTCString()
  })
}
</script>
<style lang="scss" scoped>
@import './styles/home_dashboard.scss';
@import './styles/admin.scss';
</style>
