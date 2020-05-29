<template>
    <input
        :placeholder="placeholder"
        v-model="inputValue"
        @input="onInput"
    />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class InputFeildView extends Vue {
    @Prop({ default:'' }) private id!: string;
    @Prop({ default:'' }) private placeholder!: string;

     private inputValue = '';

     get newInputValue(){
         const ID = `${this.id}`;

         const data: { [ID: string]: string } = {
            [ID]: this.inputValue
        };

        return data;
     }


    onInput(){
        this.$emit('onInput', this.newInputValue);
    }

}
</script>

<style scoped>

</style>