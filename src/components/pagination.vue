<template>
    <div class="pagination">
        <router-link to="/login" >
            login
        </router-link>
        <span>
              /  
        </span>
        <router-link to="/sign" >
            sign
        </router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PaginationView extends Vue{

}
</script>

<style scoped>
.pagination{
    height:1px;
    flex-grow: 1;
    flex-basis: 1;
}
</style>