<template>
    <div class="switch-component">
        <span class="switch-label">{{this.label}}</span>
        <label class="switch-container">
            <input type="checkbox" v-model="value" @change="changed">
            <span class="switch-input">
            </span>
        </label>
    </div>
</template>

<script>
import { eventBus } from '@/main';

export default {
    name: 'SwitchInput',
    props: {
        label: String,
        event: String,
    },
    data: () => ({
        value: false
    }),
    methods: {
        changed() {
            if (this.event) {
                eventBus.$emit(this.event, this.value);
            }
        }
    }
}
</script>

<style>

.switch-container {
	display: inline-block;
	height: 14.5px;
	line-height: 28px;
	margin-left: 15px;
	position: relative;
	vertical-align: middle;
	font-size: 14px;
	user-select: none;
}

.switch-container .switch-input {
	position: relative;
	display: inline-block;
	box-sizing: border-box;
	width: 29px;
	height: 14.5px;
	border: 1px solid #626262;
	border-radius: 9px;
	vertical-align: top;
	background: transparent;
	transition: .2s;
}
.switch-container .switch-input:before {
	content: '';
	position: absolute;
	top: 0.1em;
	left: 0.1em;
	display: inline-block;
	width: 0.66em;
	height: 0.66em;
	border-radius: 50%;
	background: #626262;
	transition: .15s;
}
.switch-container input[type=checkbox] {
	display: block;
	width: 0;
	height: 0;
	position: absolute;
	z-index: -1;
	opacity: 0;
}

.switch-container input[type=checkbox]:checked + .switch-input {
	background: #626262;
}
.switch-container input[type=checkbox]:checked + .switch-input:before {
	transform: translateX(15px);
	background: white;
}
 
/* Hover */
.switch-container input[type="checkbox"]:not(:disabled) + .switch-input {
	cursor: pointer;
}
</style>
