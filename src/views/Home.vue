<template>
  <div class="homepage_dashboard">
    <sidebar class="homepage_dashboard_sidebar">
      <div class="homepage_dashboard_sidebar_wrapper">
        <span class="homepage_dashboard_sidebar_wrapper_logo"> Buffalo HRMS </span>
        <ul class="homepage_dashboard_sidebar_wrapper_ul">
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="" class="homepage_dashboard_sidebar_wrapper_ul_li_a active"> <font-awesome-icon icon="archway" /> Home</a>
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
            <a href="" class="homepage_dashboard_sidebar_wrapper_ul_li_a">Admin Setup</a>
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
          <span class="homepage_dashboard_body_content_card_sect_t">Overview</span>
        <div class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span">Employees</span>
          <span class="homepage_dashboard_body_content_card_span_no">28</span>
          <span class="homepage_dashboard_body_content_card_span_icon"></span>
          <span class="homepage_dashboard_body_content_card_span_diff"> <span>0.3%</span> than last year </span>
          <a href="/login" class="homepage_dashboard_body_content_card_span_info">Show Employees</a>
        </div>
          <div class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span">Leave Days Taken</span>
          <span class="homepage_dashboard_body_content_card_span_no">56%</span>
          <span class="homepage_dashboard_body_content_card_span_icon"></span>
          <span class="homepage_dashboard_body_content_card_span_diff"> <span>0.3%</span> than last year </span>
          <a href="/login" class="homepage_dashboard_body_content_card_span_info">Check Leave status</a>
        </div>
         <div class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span">Gender Distribution</span>
          <span class="homepage_dashboard_body_content_card_span_no_g_d">28</span>
          <span class="homepage_dashboard_body_content_card_span_no_g_d_2">28</span>

          <span class="homepage_dashboard_body_content_card_span_icon"></span>
          <span class="homepage_dashboard_body_content_card_span_diff"> <span>0.3%</span> than last year </span>
          <a href="/login" class="homepage_dashboard_body_content_card_span_info">Show Employees</a>
        </div>
        </div>
        <div class="homepage_dashboard_body_content_sectioner">
        <span class="homepage_dashboard_body_content_card_sect_t">Pending Tasks</span>
      <div class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span">User creation</span>
        </div>
        <div class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span">Payroal upload</span>
        </div>
      </div>
      </div>
    </section>
    <sidebar class="homepage_dashboard_right">
     Profile
    </sidebar>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    headerDate: new Date().toUTCString()
  })
}
</script>
<style lang="scss" scoped>
@import './styles/home_dashboard.scss';
</style>
