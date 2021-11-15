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


      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            type="fixed-time"
            placeholder="选择时间"
            v-model="form.date2"
            style="width: 100%;"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时交付">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>

      <el-form-item label="资源选项">
        <el-radio-group v-model="form.resource">
          <el-radio label="需要赞助商"></el-radio>
          <el-radio label="不需要赞助商"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动详情">
        <tinymce v-model="form.desc" :height="300" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
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
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form)
      this.$message("submit!");
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

