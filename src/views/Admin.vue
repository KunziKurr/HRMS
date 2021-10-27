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
        <div class="homepage_dashboard_body_content_sectioner">
          <router-link to="/company-setup" class="homepage_dashboard_body_content_card">
              <span class="homepage_dashboard_body_content_card_sect_t">Admin Setup</span>
              <span class="homepage_dashboard_body_content_card_span_icon">
                <img class="homepage_dashboard_body_content_card_span_icon_img" src="../assets/home.svg" alt="" srcset="">
              </span>
              <span class="homepage_dashboard_body_content_card_span">Company Setup</span>
              <span class="homepage_dashboard_body_content_card_span_details">View customer details</span>
        </router-link>

          <router-link to="/job-setup" class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span_icon">
             <img class="homepage_dashboard_body_content_card_span_icon_img" src="../assets/employee.svg" alt="" srcset="">
          </span>
          <span class="homepage_dashboard_body_content_card_span">Job Setup</span>
          <span class="homepage_dashboard_body_content_card_span_details">Job setup</span>
        </router-link>

         <div class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span_icon">
             <img class="homepage_dashboard_body_content_card_span_icon_img" src="../assets/leave-management.svg" alt="" srcset="">
          </span>
          <span class="homepage_dashboard_body_content_card_span">Leave Set-up</span>
          <span class="homepage_dashboard_body_content_card_span_details">About Organization</span>
        </div>

          <div class="homepage_dashboard_body_content_card">
          <span class="homepage_dashboard_body_content_card_span_icon">
             <img class="homepage_dashboard_body_content_card_span_icon_img" src="../assets/setting.svg" alt="" srcset="">
          </span>
          <span class="homepage_dashboard_body_content_card_span">System Set-up</span>
          <span class="homepage_dashboard_body_content_card_span_details">System setup</span>
        </div>
        </div>
      </div>
    </section>

    </div>
</template>
<script>
import menuTemplate from './Menu_template.vue'
export default {
  name: 'Admin',
  components: {
    menuTemplate
  },
  data: () => ({
    headerDate: new Date().toUTCString()
  })
}
</script>

<style lang="scss"  >
@import './styles/home_dashboard.scss';
@import './styles/admin.scss';
</style>
