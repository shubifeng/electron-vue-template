<template>
  <div class="app-container">


    <el-form ref="form" :model="form" label-width="120px" size="mini">

      <el-input type="hidden" v-model="form.id" ></el-input>

      <el-row>
        <el-col :span="9">
          <el-form-item label="实验名称">
            <el-input v-model="form.name" disabled placeholder="~输入实验名称"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="11" :offset="2">
          <el-form-item label="倍镜">
            <el-radio-group v-model="form.camera">
              <el-radio :label="10">10X</el-radio>
              <el-radio :label="20">20X</el-radio>
              <el-radio :label="40">40X</el-radio>
              <el-radio :label="60">60X</el-radio>
              <el-radio :label="100">100X</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="2" title="相机参数设置">
          <el-button type="danger" icon="el-icon-camera" size="small" circle>相机参数设置</el-button>
        </el-col>

      </el-row>






      <el-row :gutter="4">
        <el-col :span="10">
          <el-row>
            <el-col>
              <el-form-item label="采样模式" title="自动采用将通过程序自动对所有的孔板进行采样，后期可根据具体样本类型自动进行倍镜/孔位/拍照等无人实验">
                <el-radio-group v-model="form.isAuto" size="small">
                  <el-radio-button label="自动"></el-radio-button>
                  <el-radio-button label="手工"></el-radio-button>
                  <!--              <el-radio-button label="广州" disabled></el-radio-button>-->
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-form-item label="X轴步进值">
              <el-slider v-model="form.xPosition" :step="1000" :min="1000" :max="20000" show-input input-size="mini"> </el-slider>
            </el-form-item>
            <el-form-item label="Y轴步进值">
              <el-slider v-model="form.yPosition" :step="1000" :min="1000" :max="20000" show-input input-size="mini"> </el-slider>
            </el-form-item>
            <el-form-item label="Z轴步进值">
              <el-slider v-model="form.zPosition" :step="1000" :min="1000" :max="20000" show-input input-size="mini"> </el-slider>
            </el-form-item>
          </el-row>
          <el-row>
            <el-alert
                title="坐标位置：x,y,z"
                type="warning">
            </el-alert>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="8" :offset="9"><el-button size="small" style="width: 80px" type="info" plain>Y ++</el-button></el-col>
            <el-col :span="7"><el-button size="small" type="info" style="width: 80px" plain>Z ++</el-button></el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="7" :offset="2"><el-button size="small" type="info" style="width: 80px" plain>X --</el-button></el-col>
            <el-col :span="8"><el-button size="small" type="info" style="width: 80px" icon="el-icon-delete" plain circle>归零</el-button></el-col>
            <el-col :span="7"><el-button size="small" type="info" style="width: 80px" plain>X++</el-button></el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="7" :offset="2"><el-button size="small" type="info" style="width: 80px" plain>Z --</el-button></el-col>
            <el-col :span="15"><el-button size="small" type="info" style="width: 80px" plain>Y --</el-button></el-col>
          </el-row>
        </el-col>
        <el-col :span="13" :offset="1">
          <el-row>
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col>
              <el-button size="small" type="info" style="width: 90px" plain>手工采样</el-button>
              <el-button size="small" type="info" style="width: 90px" plain>自动采样</el-button>
              <el-button size="small" type="info" style="width: 90px" plain>停止采样</el-button>
            </el-col>
            <el-col>
              <el-form-item label="灯光控制">
                <el-radio-group v-model="form.light">
                  <el-radio :label="3">荧光</el-radio>
                  <el-radio :label="6">蓝光</el-radio>
                  <el-radio :label="9">无光</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col>
              <el-button size="small" type="info" style="width: 110px" plain>保存对焦参数</el-button>
            </el-col>
            <el-col>
              <el-form-item label="灯光控制">
                <el-radio-group v-model="form.light">
                  <el-radio :label="3">荧光</el-radio>
                  <el-radio :label="6">蓝光</el-radio>
                  <el-radio :label="9">无光</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>








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
        xPosition: 0,
        xIsDefault: '是',
        yPosition: 0,
        zPosition: 0,
        light: 'none'
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
<style>
.el-row {
  margin-bottom: 5px;
}


.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 450px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
<style scoped>
.line {
  text-align: center;
}
</style>

