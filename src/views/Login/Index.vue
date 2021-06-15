<script setup lang="ts">
  import { reactive, ref } from '@vue/reactivity';

  const checkAge = (rule, value, callback) => {
    if (!value) {
      return callback(new Error('Please input the age'));
    }
    setTimeout(() => {
      if (!Number.isInteger(value)) {
        callback(new Error('Please input digits'));
      } else {
        if (value < 18) {
          callback(new Error('Age must be greater than 18'));
        } else {
          callback();
        }
      }
    }, 1000);
  };
  const validatePass = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password'));
    } else {
      if (ruleForm.checkPass !== '') {
        ruleForm.validateField('checkPass');
      }
      callback();
    }
  };
  const validatePass2 = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'));
    } else if (value !== ruleForm.pass) {
      callback(new Error("Two inputs don't match!"));
    } else {
      callback();
    }
  };
  const form = reactive(null);
  const ruleForm = reactive({
    pass: '',
    checkPass: '',
    age: ''
  });
  const rules = {
    pass: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
    age: [{ validator: checkAge, trigger: 'blur' }]
  };

  function submitForm(form) {
    form.validate(valid => {
      if (valid) {
        alert('submit!');
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
  function resetForm(form) {
    form.resetFields();
  }
</script>

<template>
  <el-form ref="form" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
    <el-form-item label="Password" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Confirm" prop="checkPass">
      <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Age" prop="age">
      <el-input v-model.number="ruleForm.age"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(form)">Submit</el-button>
      <el-button @click="resetForm(form)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>
