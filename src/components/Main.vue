<script setup>
import LeftContent from './partials/LeftContent.vue';
import RightContent from './partials/RightContent.vue';
import Banner from './partials/Banner.vue';
import Upsell from './partials/Upsell.vue';
</script>

<template>
    <main class="main-container">
      <Banner />
      <div class="container mt-3">
        <div class="row">
            <div class="col-md">
            <Upsell />
          </div>
          <div class="col-md">
            <div class="right-content-container">
              <RightContent />
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>

