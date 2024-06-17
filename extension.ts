enum ChartType {
    //% block="bar"
    Bar=0,
    //% block="pie"
    Pie=1,
};

enum PlotType {
    //% block="line"
    Line = 10,
    //% block="scatter"
    Scatter = 11,
};

enum ChangeType {
    //% block="+"
    Increase = 0,
    //% block="-"
    Decrease,
};


//% color=#a4bfe1 weight=100 block="Chart" advanced=false
namespace chart {

    /** Instances to be created for each label so that autocompletion can work */
    class ChartLabel {
        constructor(
            public label: string,
        ) {
        }
    }

    //% block="$label"
    //% blockId=chart_labelField
    //% blockHidden=true shim=TD_ID
    //% label.fieldEditor="autocomplete" column.fieldOptions.decompileLiterals=true
    //% label.fieldOptions.key="chartlabel"
    export function _labelField(label: string) {
        return label;
    }

    //% block="config %chartType chart with labels $label1 $label2 || $label3 $label4 $label5 $label6 $label7 $label8 $label9 $label10"
    //% weight=90
    //% blockId=chart_setLabel
    //% inlineInputMode="variable"
    //% inlineInputModeLimit=1
    //% label1.shadow=chart_labelField
    //% label2.shadow=chart_labelField
    //% label3.shadow=chart_labelField
    //% label4.shadow=chart_labelField
    //% label5.shadow=chart_labelField
    //% label6.shadow=chart_labelField
    //% label7.shadow=chart_labelField
    //% label8.shadow=chart_labelField
    //% label9.shadow=chart_labelField
    //% label10.shadow=chart_labelField
    export function config(
        chartType: ChartType,
        label1: string,
        label2?: string,
        label3?: string,
        label4?: string,
        label5?: string,
        label6?: string,
        label7?: string,
        label8?: string,
        label9?: string,
        label10?: string
    ): void {
        serial.writeLine(":Chart:Type:" + chartType)
        serial.writeString(":Chart:Labels: [");
        const labels = [label1, label2, label3, label4, label5, label6, label7, label8, label9, label10]
            .filter(el => !!el)
        const labelsLength = labels.length;
        labels.map((label: string, i: number) => {
                serial.writeString(label);
                if (i < (labelsLength - 1)) serial.writeString(", ");
            });
        serial.writeLine("]");
    }

    //% blockId=chart_setValue
    //% weight=80
    //% label.shadow=chart_labelField
    //% block="set label %label to %value"
    export function setValue(label: string, value: number) {
        serial.writeLine(":Set:" + label + ":" + value);
    }

    //% blockId=chart_changeValue
     //% weight=70
    //% label.shadow=chart_labelField
    //% block="change %label by %changeType %value"
    export function changeValue(label: string, changeType: ChangeType, value: number) {
        if (changeType == ChangeType.Increase) {
            serial.writeLine(":Inc:" + label + ":" + value);
        } else {
            serial.writeLine(":Dec:" + label + ":" + value);
        }
    }
}

//% color=#88a1c0 weight=100 block="Plot" advanced=false
namespace plot {

    /** Instances to be created for each label so that autocompletion can work */
    class PlotLabelValue {
        public value: string;
        constructor(
            public label: string,
            value: any
        ) {
            this.value = "" + value;
        }
    }

    //% block="$label"
    //% blockId=plot_labelField
    //% blockHidden=true shim=TD_ID
    //% label.fieldEditor="autocomplete" column.fieldOptions.decompileLiterals=true
    //% label.fieldOptions.key="plotlabelvalue"
    export function _labelField(label: string) {
        return label;
    }

    //% block="label $label value $value"
    //% blockId=plot_createLV
    //% label.shadow=plot_labelField
    //% value.shadow=math_number
    //% weight=60
    export function createLV(label: string, value: any): PlotLabelValue {
        return new PlotLabelValue(label, value);
    }

    //% block="config %chartType plot with labels $label1 || $label2 $label3 $label4 $label5 $label6 $label7 $label8 $label9 $label10"
    //% weight=90
    //% blockId=plot_setLabel
    //% inlineInputMode="variable"
    //% inlineInputModeLimit=2
    //% label1.shadow=plot_labelField
    //% label2.shadow=plot_labelField
    //% label3.shadow=plot_labelField
    //% label4.shadow=plot_labelField
    //% label5.shadow=plot_labelField
    //% label6.shadow=plot_labelField
    //% label7.shadow=plot_labelField
    //% label8.shadow=plot_labelField
    //% label9.shadow=plot_labelField
    //% label10.shadow=plot_labelField
    export function config(
        plotType: PlotType,
        label1: string,
        label2?: string,
        label3?: string,
        label4?: string,
        label5?: string,
        label6?: string,
        label7?: string,
        label8?: string,
        label9?: string,
        label10?: string
    ): void {
        serial.writeLine(":Plot:Type:" + plotType)
        serial.writeString(":Plot:Labels: [");
        const labels = [label1, label2, label3, label4, label5, label6, label7, label8, label9, label10]
            .filter(el => !!el)
        const labelsLength = labels.length;
        labels.map((label: string, i: number) => {
                serial.writeString(label);
                if (i < (labelsLength - 1)) serial.writeString(", ");
            });
        serial.writeLine("]");
    }

    //% blockId=plot_addValue
    //% block="Add $data1 $data2 $data3 || $data4 $data5 $data6 $data7 $data8 $data9 $data10"
    //% weight=80
    //% inlineInputMode="variable"
    //% inlineInputModeLimit=1
    //% data1.shadow=plot_createLV
    //% data2.shadow=plot_createLV
    //% data3.shadow=plot_createLV
    //% data4.shadow=plot_createLV
    //% data5.shadow=plot_createLV
    //% data6.shadow=plot_createLV
    //% data7.shadow=plot_createLV
    //% data8.shadow=plot_createLV
    //% data9.shadow=plot_createLV
    //% data10.shadow=plot_createLV
    export function addValue(
        data1: PlotLabelValue,
        data2?: PlotLabelValue,
        data3?: PlotLabelValue,
        data4?: PlotLabelValue,
        data5?: PlotLabelValue,
        data6?: PlotLabelValue,
        data7?: PlotLabelValue,
        data8?: PlotLabelValue,
        data9?: PlotLabelValue,
        data10?: PlotLabelValue
    ) {
        const timeStamp = input.runningTime();
        [
            data1,
            data2,
            data3,
            data4,
            data5,
            data6,
            data7,
            data8,
            data9,
            data10,
        ].filter(el => !!el).forEach((el: PlotLabelValue) => {
            serial.writeLine(":Add:" + timeStamp + ":" + el.label + ":" + el.value);
        });
    }
}
