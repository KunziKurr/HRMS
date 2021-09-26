<template>
  <div class="homepage_dashboard">
    <sidebar class="homepage_dashboard_sidebar">
      <div class="homepage_dashboard_sidebar_wrapper">
        <span class="homepage_dashboard_sidebar_wrapper_logo"> Buffalo HRMS </span>
        <ul class="homepage_dashboard_sidebar_wrapper_ul">
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="" class="homepage_dashboard_sidebar_wrapper_ul_li_a active"> <font-awesome-icon icon="home" /> Home</a>
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
      <header></header>
    </section>
    <sidebar class="homepage_dashboard_right">
      <h1>diebar</h1>
    </sidebar>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
@import './styles/home_dashboard.scss';
</style>
