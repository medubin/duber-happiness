class Api::DaysController < ApplicationController
    def index
        if (!current_user)
            render json: "User not found", status: 422
        else
            @days = current_user.days
            render "api/days/index"
        end
    end

    def create
        if (!current_user)
            render json: "User not found", status: 422
        else 
            @day = Day.create(day_params)
            @day.user_id = current_user.id
            @day.save
            render "api/days/show"
        end
    end

    private
    def day_params
      params.require(:day).permit(:date, :happiness)
    end


end
