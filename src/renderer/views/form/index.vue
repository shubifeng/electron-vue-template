<template>
  <div class="app-container">

    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="实验名称">
        <el-input v-model="form.name" placeholder="~输入实验名称"></el-input>
      </el-form-item>

      <el-form-item label="样本孔位">
        <el-row>
          <el-col :span="6">
            <el-switch
                v-model="form.kongA"
                active-text="A孔">
            </el-switch>
          </el-col>
          <el-col :span="9">
            <el-select v-model="form.kongCountA" placeholder="~选择孔板">
              <el-option label="6孔" value="6" name="kongCountA"></el-option>
              <el-option label="12孔" value="12" name="kongCountA"></el-option>
              <el-option label="24孔" value="24" name="kongCountA"></el-option>
              <el-option label="96孔" value="96" name="kongCountA"></el-option>
            </el-select>
          </el-col>
          <el-col :span="9">
            <el-input v-model="form.kongTitleA"  placeholder="~样本编号或名称"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-switch
                v-model="form.kongB"
                active-text="B孔">
            </el-switch>
          </el-col>
          <el-col :span="9">
            <el-select v-model="form.kongCountB" placeholder="~选择孔板">
              <el-option label="6孔" value="6" name="kongCountB"></el-option>
              <el-option label="12孔" value="12" name="kongCountB"></el-option>
              <el-option label="24孔" value="24" name="kongCountB"></el-option>
              <el-option label="96孔" value="96" name="kongCountB"></el-option>
            </el-select>
          </el-col>
          <el-col :span="9">
            <el-input v-model="form.kongTitleB"  placeholder="~样本编号或名称"></el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">下一步</el-button>
        <el-button @click="onCancel">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
export default {
  components: { Tinymce },
  data() {
    return {
      form: {
        kongA: true,
        kongB: false,
        name: "",
        kongCountA: [],
        kongCountB: [],
        kongTitleA: "",
        kongTitleB: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form)
      this.$message("submit!");
      this.$router.push({ path: "/form/operate" });
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning"
      });
    }
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

